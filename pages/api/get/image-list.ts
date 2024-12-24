import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { NextApiRequest, NextApiResponse } from "next";
import { AWSImageItmeType } from "@/types/aws-image";
import checkMethod from "@/app/util/function/api/checkMethod";
import getS3Client from "@/app/util/function/api/s3Client";
import { checkMissingKey } from "@/app/util/function/api/checkMissingKey";
import { bucketName, region } from "@/app/util/function/api/enviroments";

// S3 클라이언트 초기화
const s3Client = getS3Client();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const methodValidation = checkMethod("GET", req.method || "");
  if (methodValidation) {
    const { status, message } = methodValidation;
    return res.status(status).json(message);
  }

  const keyValidation = checkMissingKey();
  if (keyValidation) {
    const { status, message } = keyValidation;
    return res.status(status).json({ message });
  }

  try {
    // S3 버킷에서 객체 가져오기
    const command = new ListObjectsV2Command({ Bucket: bucketName });
    const data = await s3Client.send(command);

    // S3 객체를 URL로 매핑
    const images: AWSImageItmeType[] =
      data.Contents?.map((item) => ({
        name: item.Key?.split(".")[0] || "",
        url: `https://${bucketName}.s3.${region}.amazonaws.com/${item.Key}`,
      })) || [];

    // 성공 응답
    return res.status(200).json(images);
  } catch (error: any) {
    // AWS SDK 에러 처리
    if (error.name === "CredentialsError") {
      return res.status(500).json({
        message:
          "AWS 자격 증명에 문제가 발생했습니다. 환경 변수를 확인해주세요.",
      });
    }

    if (error.name === "NoSuchBucket") {
      return res.status(404).json({
        message: "지정된 S3 버킷을 찾을 수 없습니다. 버킷 이름을 확인해주세요.",
      });
    }

    // 일반 에러 처리
    console.error("S3 이미지 가져오기 오류:", error);
    return res.status(500).json({
      message:
        "S3 이미지 가져오기 중 알 수 없는 오류가 발생했습니다. 관리자에게 문의하세요.",
    });
  }
}
