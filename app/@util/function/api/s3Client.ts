import { S3Client } from "@aws-sdk/client-s3";

const accessKey = process.env.AWS_ACCESS_KEY_ID || "";
const secretKey = process.env.AWS_SECRET_ACCESS_KEY || "";
const region = process.env.AWS_REGION || "";

export default function getS3Client() {
  return new S3Client({
    region,
    credentials: {
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
    },
  });
}
