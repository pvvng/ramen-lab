import checkMethod from "@/app/util/function/api/checkMethod";
import connectDatabase from "@/app/util/function/api/connectDatabase";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // 요청 메서드 검증
    const methodValidation = checkMethod("DELETE", req.method || "");
    if (methodValidation) {
      const { status, message } = methodValidation;
      return res.status(status).json(message);
    }

    const {
      id,
      isPasswordValidate,
    }: { id: string; isPasswordValidate: boolean } = req.body;

    if (!id) {
      return res
        .status(400)
        .json({ message: "레시피 아이디가 확인되지 않습니다." });
    }

    if (!isPasswordValidate) {
      return res
        .status(400)
        .json({ message: "잘못된 비밀번호입니다." });
    }

    // 데이터베이스 연결
    const db = await connectDatabase();
    if ("isFailed" in db) {
      const { status, message } = db;
      return res.status(status).json(message);
    }

    // 레시피 삭제
    const result = await db
      .collection("recipe")
      .deleteOne({ _id: new ObjectId(id) });

    // 삭제 결과 처리
    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: "삭제할 레시피를 찾을 수 없습니다." });
    }

    return res
      .status(200)
      .json({ message: "레시피가 성공적으로 삭제되었습니다." });
  } catch (error) {
    console.error("서버 오류:", error);
    return res
      .status(500)
      .json({ message: "서버 오류가 발생했습니다. 다시 시도해주세요." });
  }
}
