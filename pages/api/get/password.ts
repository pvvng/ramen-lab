import checkMethod from "@/app/@util/function/api/checkMethod";
import checkQueryType from "@/app/@util/function/api/checkQueryType";
import { verifyPassword } from "@/app/@util/function/general/crypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 요청 메서드 검증
  const methodValidation = checkMethod("GET", req.method || "");
  if (methodValidation) {
    const { status, message } = methodValidation;
    return res.status(status).json(message);
  }

  let { input, target } = req.query;
  
  input = checkQueryType(input);
  target = checkQueryType(target);

  // 요청 필드 검증
  if (!input || !target) {
    return res.status(400).json({ message: "입력값과 대상이 필요합니다." });
  }

  // 숫자로 변환 및 형식 검증
  const numberInput = parseInt(input, 10);
  if (Number.isNaN(numberInput)) {
    return res
      .status(400)
      .json({ message: "비밀번호가 숫자 형식이 아닙니다." });
  }

  // 비밀번호 검증
  const isVerified = await verifyPassword(numberInput, target);

  return res.status(200).json(isVerified);
}
