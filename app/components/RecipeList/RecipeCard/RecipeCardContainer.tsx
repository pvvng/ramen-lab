"use client";
//type
import { RecipeType } from "@/types/recipe";
// components
import RecipeHeader from "./RecipeHeader";
import RecipeFooter from "./RecipeFooter";
import RecipeBody from "./RecipeBody";

export default function RecipeCardContainer({
  recipeData,
}: {
  recipeData: RecipeType;
}) {
  const { name, password, view, like, explain, ingredient } = recipeData;

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mt-2">
      <RecipeHeader name={name} />
      <RecipeBody ingredient={ingredient} explain={explain} />
      <RecipeFooter password={password} view={view} like={like} />
    </div>
  );
}
