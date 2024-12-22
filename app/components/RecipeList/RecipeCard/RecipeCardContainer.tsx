"use client";
//type
import { RecipeType } from "@/types/recipe";
// components
import RecipeHeader from "./RecipeHeader";
import RecipeFooter from "./Footer/RecipeFooter";
import RecipeBody from "./RecipeBody";

export default function RecipeCardContainer({
  recipeData,
}: {
  recipeData: RecipeType;
}) {
  const { _id, name, password, view, like, explain, ingredient } = recipeData;

  const footerProps = { _id, name, password, view, like, explain };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mt-2">
      <RecipeHeader name={name} />
      <RecipeBody ingredient={ingredient} explain={explain} />
      <RecipeFooter props={footerProps} />
    </div>
  );
}
