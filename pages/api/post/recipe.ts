import checkMethod from "@/app/@util/function/api/checkMethod";
import connectDatabase from "@/app/@util/function/api/connectDatabase";
import { hashPassword } from "@/app/@util/function/general/crypt";
import { validateIngredient, validateRequest } from "@/app/@util/function/general/validation/validateRecipeRequest";
import { AWSImageItmeType } from "@/types/aws-image";
import { NextApiRequest, NextApiResponse } from "next";

interface BodyType {
    name : string;
    stringPassword : string;
    explain : string;
    stringIngredient : string;
}

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    const methodValidation = checkMethod("POST", req.method || '');
    if(methodValidation) {
        const { status, message } = methodValidation;
        return res.status(status).json(message);
    }

    const { name, stringPassword, explain, stringIngredient } : BodyType = req.body;
    
    const ingredient : AWSImageItmeType[] = JSON.parse(stringIngredient);
    const password : number = parseInt(stringPassword);

    // 요청 본문 검증
    const validationError = validateRequest(name, password, explain);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    // 재료 배열 검증
    const ingredientValidationError = validateIngredient(ingredient);
    if(ingredientValidationError){
        return res.status(400).json({ message : ingredientValidationError });
    }

    const db = await connectDatabase();
    if("isFailed" in db){
        const { status, message } = db;
        return res.status(status).json(message);
    }

    // 패스워드 암호화 처리
    let hashedPassword: string;
    try {
        hashedPassword = await hashPassword(password);
    } catch (error) {
        console.error("Password hashing failed:", error);
        return res.status(500).json({
            message: "Password hashing failed. Please try again.",
            error: error instanceof Error ? error.message : error,
        });
    }

    // 데이터 삽입 처리
    try {
        await db.collection("recipe").insertOne({
            name: name,
            password: hashedPassword,
            explain : explain,
            ingredient : ingredient,
            like: 0,
            view: 0,
        });

        return res.redirect(302, '/');
    } catch (error) {
        console.error("Failed to insert recipe into database:", error);
        return res.status(500).json({
            message: "Failed to save recipe to the database. Please try again.",
            error: error instanceof Error ? error.message : error,
        });
    }
}