import checkMethod from "@/app/util/function/api/checkMethod";
import connectDatabase from "@/app/util/function/api/connectDatabase";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const methodValidation = checkMethod("PATCH", req.method || "");
  if (methodValidation) {
    const { status, message } = methodValidation;
    return res.status(status).json(message);
  }

  const id: string = req.body.id;
  console.log(id);
  if (!id) {
    return res.status(400).json("레시피 아이디가 확인되지 않습니다.");
  }

  if (typeof id !== "string") {
    return res.status(400).json("레시피 아이디 형식이 일치하지 않습니다.");
  }

  const db = await connectDatabase();
  if ("isFailed" in db) {
    const { status, message } = db;
    return res.status(status).json(message);
  }

  const result = await db.collection("recipe").updateOne(
    { _id: new ObjectId(id) }, // 조건
    { $inc: { like: 1 } } // like 필드 +1
  );

  try {
    if (result.modifiedCount === 1) {
      return res.status(200).json("좋아요가 추가되었습니다.");
    } else {
      return res.status(500).json("좋아요 추가에 실패했습니다.");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("서버 오류가 발생했습니다.");
  }
}
