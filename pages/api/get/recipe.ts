import checkMethod from "@/app/@util/function/api/checkMethod";
import connectDatabase from "@/app/@util/function/api/connectDatabase";
import { RecipeType } from "@/types/recipe";
import { NextApiRequest, NextApiResponse } from "next";

const EXCEPT_REPORT = 10;

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
        const recipes = await db.collection<RecipeType>("recipe").find().toArray();

        const exceptedReportedRecipe = recipes.filter(v => v.report <= EXCEPT_REPORT);

        return res.status(200).json(exceptedReportedRecipe);
    } catch (error) {
        console.error("Failed to fetch recipes from the database:", error);
        return res.status(500).json({
            message: "Failed to fetch recipes. Please try again later.",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }

}