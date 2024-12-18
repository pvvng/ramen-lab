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
        // S3 버킷에서 객체 가져오기
        const params = { Bucket: bucketName };
        const data = await s3.listObjectsV2(params).promise();

        // S3 객체를 URL로 매핑
        const images = data.Contents?.map((item) => ({
            name: item.Key?.split('.')[0],
            url: `https://${bucketName}.s3.${region}.amazonaws.com/${item.Key}`,
        })) || [];

        // 성공 응답
        return res.status(200).json(images);
    } catch (error: any) {
        // AWS SDK 에러 처리
        if (error.code === 'CredentialsError') {
            return res.status(500).json({
                message: 'AWS 자격 증명에 문제가 발생했습니다. 환경 변수를 확인해주세요.',
            });
        }

        if (error.code === 'NoSuchBucket') {
            return res.status(404).json({
                message: '지정된 S3 버킷을 찾을 수 없습니다. 버킷 이름을 확인해주세요.',
            });
        }

        // 일반 에러 처리
        console.error('S3 이미지 가져오기 오류:', error);
        return res.status(500).json({
            message: 'S3 이미지 가져오기 중 알 수 없는 오류가 발생했습니다. 관리자에게 문의하세요.',
        });
    }
}