import { RecipeType } from "@/types/recipe";
import axios from "axios";
import processError from "./processError";

const url = process.env.NEXTAUTH_URL;

export default async function getRecipeDetailData(
  id: string
): Promise<RecipeType> {
  try {
    return await fetchData(id);
  } catch (error) {
    throw processError(error);
  }
}

async function fetchData(id: string) {
  const recipeDetail = await axios.get<RecipeType>(
    url + "/api/get/recipe-detail",
    {
      params: { id },
    }
  );

  return recipeDetail.data;
}

