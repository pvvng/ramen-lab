import checkMethod from "@/app/@util/function/api/checkMethod";
import checkQueryType from "@/app/@util/function/api/checkQueryType";
import connectDatabase from "@/app/@util/function/api/connectDatabase";
import { RecipeType } from "@/types/recipe";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const methodValidation = checkMethod("GET", req.method || "");

  if (methodValidation) {
    const { status, message } = methodValidation;
    return res.status(status).json(message);
  }

  let mongoId = req.query.id;
  mongoId = checkQueryType(mongoId);

  const db = await connectDatabase();
  if ("isFailed" in db) {
    const { status, message } = db;
    return res.status(status).json(message);
  }

  try {
    const findRecipe = await db
      .collection("recipe")
      .findOneAndUpdate(
        { _id: new ObjectId(mongoId) },
        { $inc: { view: 1 } },
        { returnDocument: "after" }
      );

    if (!findRecipe) {
      return res.status(404).json({ message: "레시피를 찾을 수 없습니다." });
    }

    return res.status(200).json(findRecipe);
  } catch (error: unknown) {
    // 6. 예기치 않은 에러 처리
    console.error("서버 에러:", error);
    return res.status(500).json({ message: "서버 내부 오류가 발생했습니다." });
  }
}
