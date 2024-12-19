import { connectDB } from "@/app/@util/database";
import { RecipeType } from "@/types/recipe";
import { Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    // 메서드 확인
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed.' });
    }

    // 데이터베이스 연결 처리
    let db: Db;
    try {
        db = (await connectDB).db('ramen-lab');
    } catch (error) {
        return res.status(500).json({ message: "Database connection failed", error });
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