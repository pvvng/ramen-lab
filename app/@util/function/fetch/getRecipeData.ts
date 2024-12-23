import { RecipeType } from "@/types/recipe";
import axios from "axios";
import processError from "./processError";

export default async function getRecipeData() {
  try {
    const recipe = await axios.get<RecipeType[]>("/api/get/recipe");
    const sortedData = sortData(recipe.data);
    return sortedData;
  } catch (error : unknown) {
    processError(error)
  }
}

function sortData(array: RecipeType[]) {
  return array.sort((a, b) => b.like - a.like);
}
