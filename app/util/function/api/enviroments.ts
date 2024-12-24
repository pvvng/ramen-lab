// 환경 변수 설정
export const accessKey = process.env.AWS_ACCESS_KEY_ID || "";
export const secretKey = process.env.AWS_SECRET_ACCESS_KEY || "";
export const region = process.env.AWS_REGION || "";
export const bucketName = process.env.S3_BUCKET_NAME || "";