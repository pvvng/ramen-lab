export type httpMethod = "GET"|"POST"|"PUT"|"PATCH"|"DELETE";

export default function checkMethod(
  targetMethod: httpMethod,
  method: string,
) {
  // 메서드 확인
  if (targetMethod !== method) {
    return { message: "Method Not Allowed." , status : 405 };
  }

  return;
}
