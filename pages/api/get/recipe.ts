import { connectDB } from "@/app/@util/database";
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

    let result = await db.collection('recipe').find().toArray();

    return res.status(200).send(result)
}