import { RecipeType } from "@/types/recipe";
import axios from "axios";

export default async function getRecipeData() {
  try {
    const recipe = await axios.get<RecipeType[]>("/api/get/recipe");
    return recipe.data;
  } catch (error) {
    // error가 AxiosError인지 확인
    if (axios.isAxiosError(error)) {
      // AxiosError 타입에 따라 에러 처리
      console.error("Axios 에러 발생:", error.response?.data);
    } else if (error instanceof Error) {
      // 다른 일반 에러 처리
      console.error("일반 에러 발생:", error.message);
    } else {
      console.error("알 수 없는 에러 발생");
    }

    // 에러를 다시 던져 useQuery에서 처리하도록 함
    throw error;
  }
}
