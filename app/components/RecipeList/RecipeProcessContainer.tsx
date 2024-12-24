"use client";
// custom hook
import useGetRecipeData from "@/app/util/hooks/useGetRecipeData";
// component
import LoadProcessContainer from "../LoadProcessContainer";
import RecipeCardContainer from "./RecipeCard/RecipeCardContainer";
// zustand store
import { useRecipeStore } from "@/app/store/useRecipeStore";

export default function RecipeProcessContainer() {
  const { isLoading, isError } = useGetRecipeData();

  const { recipes } = useRecipeStore();

  if (isLoading || !recipes) {
    return <LoadProcessContainer text="로딩중입니다." />;
  }

  if (isError) {
    <LoadProcessContainer text="에러가 발생했습니다." />;
  }

  return recipes.map((v) => (
    <RecipeCardContainer key={v.password} recipeData={v} />
  ));
}
