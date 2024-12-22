import { RecipeType } from "@/types/recipe";
import axios from "axios";

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

function processError(error: unknown) {
  if (axios.isAxiosError(error)) {
    const customMessage =
      error.response?.data?.message ||
      "데이터를 불러오는 중 문제가 발생했습니다.";
    console.error("Axios 에러 발생:", customMessage);
    throw new Error(customMessage); // 커스텀 메시지 던지기
  } else if (error instanceof Error) {
    console.error("일반 에러 발생:", error.message);
    throw new Error(error.message || "알 수 없는 오류가 발생했습니다.");
  } else {
    console.error("알 수 없는 에러 발생");
    throw new Error("서버 내부 오류가 발생했습니다.");
  }
}
