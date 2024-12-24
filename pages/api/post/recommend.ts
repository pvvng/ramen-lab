import checkMethod from "@/app/util/function/api/checkMethod";
import connectDatabase from "@/app/util/function/api/connectDatabase";
import { preventNoSQLInjection } from "@/app/util/function/general/validation/checkNoSQLInjection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const methodValidation = checkMethod("POST", req.method || "");
  if (methodValidation) {
    const { status, message } = methodValidation;
    return res.status(status).json(message);
  }

  const clientIp =
    req.headers["x-forwarded-for"]?.toString().split(",")[0] || // 프록시를 통한 IP
    req.socket.remoteAddress || // 직접 연결된 IP
    "IP 주소를 가져올 수 없습니다.";

  const recommend: string = req.body.recommend;

  if (!recommend) {
    return res.status(405).json({ message: "recommend field required" });
  }

  if (recommend.length > 100 || recommend.length < 1) {
    return res
      .status(405)
      .json({ message: "재료 추천은 1~100자 까지 가능합니다." });
  }

  const noSql = preventNoSQLInjection(recommend);
  if (noSql) {
    return res.status(405).json({ message: noSql });
  }

  const db = await connectDatabase();
  if ("isFailed" in db) {
    const { status, message } = db;
    return res.status(status).json(message);
  }

  try {
    const result = await db
      .collection("recommend")
      .insertOne({ recommend, clientIp });
    if (result.acknowledged) {
      return res
        .status(201)
        .json({ message: "추천이 성공적으로 저장되었습니다." });
    } else {
      return res
        .status(500)
        .json({ message: "데이터를 저장하는 동안 문제가 발생했습니다." });
    }
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ message: "서버 내부에서 문제가 발생했습니다." });
  }
}
