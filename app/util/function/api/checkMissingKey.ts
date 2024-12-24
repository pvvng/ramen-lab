import { accessKey, bucketName, region, secretKey } from "./enviroments";


const ERROR_MESSAGE = "환경변수가 설정되지 않았습니다. 확인 후 다시 시도해주세요.";

export function checkMissingKey() {
  // 환경 변수 확인
  const missingVar = [
    accessKey, 
    secretKey, 
    region, 
    bucketName
  ].find((v) => !v);

  if (missingVar) {
    return {
      message: ERROR_MESSAGE,
      status: 500,
    };
  }

  return;
}
