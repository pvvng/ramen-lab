import checkMethod from "@/app/@util/function/api/checkMethod";
import connectDatabase from "@/app/@util/function/api/connectDatabase";
import { RecipeType } from "@/types/recipe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    const methodValidation = checkMethod("GET", req.method || '');

    if(methodValidation) {
        const { status, message } = methodValidation;
        return res.status(status).json(message);
    }

    const db = await connectDatabase();
    if("isFailed" in db){
        const { status, message } = db;
        return res.status(status).json(message);
    }

    try {
        // 데이터 조회
        const rawResult = await db.collection<RecipeType[]>("recipe").find().toArray();

        // _id 필드만 삭제한 새로운 객체 배열 생성
        const result = rawResult.map(v => {
            const {_id, ...rest} = v
            return rest;
        });
        
        // 성공 응답
        return res.status(200).json(result);
    } catch (error) {
        console.error("Failed to fetch recipes from the database:", error);
        return res.status(500).json({
            message: "Failed to fetch recipes. Please try again later.",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }

}