import AWS from 'aws-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

const accessKey = process.env.AWS_ACCESS_KEY_ID || '';
const secretKey = process.env.AWS_SECRET_ACCESS_KEY || '';
const region = process.env.AWS_REGION || '';
const bucketName = process.env.S3_BUCKET_NAME || '';

const s3 = new AWS.S3({
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
    region: region,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const key = "안성탕면.webp";

    // 메서드 확인
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed. Only GET is allowed.' });
    }

    // 환경 변수 확인
    const missingVar = [accessKey, secretKey, region, bucketName].find((v) => !v);
    if (missingVar) {
        return res.status(500).json({ message: '환경변수가 설정되지 않았습니다. 확인 후 다시 시도해주세요.' });
    }

    try {
        // 3. S3 객체 목록 가져오기
        const params = { Bucket: bucketName, Key : key };
        const data = await s3.listObjectsV2(params).promise();

        // 4. 이미지 URL 생성 및 반환
        const images = data.Contents?.map((item) => ({
        name: item.Key?.split('.')[0], // 파일 이름 (확장자 제거)
        url: `https://${bucketName}.s3.${region}.amazonaws.com/${item.Key}`, // 정적 URL
        })) || [];

        return res.status(200).json(images); // JSON 응답
    } catch (error : any) {
        console.error('데이터 가져오기 오류:', error.message);
        return res.status(500).json({ message : '지정된 키의 데이터를 가져오지 못했습니다.' });
    }
}