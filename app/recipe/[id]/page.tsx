import { ObjectId } from "mongodb";
import RecipeDataHub from "./component/RecipeDataHub";
import getRecipeDetailData from "@/app/@util/function/fetch/getRecipeDetailData";

interface PropsType {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetail({ params }: PropsType) {
  try {
    const recipeId = (await params).id;
    
    return <ProcessRecipeData recipeId={recipeId} />;
  } catch (error: any) {
    const errorMessage = error.message || "알 수 없는 오류가 발생했습니다.";

    return <Error errorMessage={errorMessage} />;
  }
}

async function ProcessRecipeData({ recipeId }: { recipeId: string }) {
  // MongoDB ObjectId 유효성 검사
  if (!ObjectId.isValid(recipeId)) {
    return <Error errorMessage="잘못된 접근입니다." />;
  }

  // 레시피 데이터 패칭
  const recipeDetailData = await getRecipeDetailData(recipeId);

  return (
    <div className="p-2">
      <RecipeDataHub recipe={recipeDetailData} />
    </div>
  );
}

// 에러 페이지 컴포넌트
function Error({ errorMessage }: { errorMessage: string }) {
  return (
    <h1 className="text-3xl text-center font-extrabold mt-5">{errorMessage}</h1>
  );
}
