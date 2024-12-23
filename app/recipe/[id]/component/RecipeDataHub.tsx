// type
import { RecipeType } from "@/types/recipe";
//component
import RecipeDetailHeader from "./Header/RecipeDetailHeader";
import RecipeDetailBody from "./Body/RecipeDetailBody";
import RecipePassWordInput from "./Footer/RecipePassWordInput";
import RecipeFooter from "./Footer/RecipeFooter";

export default function RecipeDataHub({ recipe }: { recipe: RecipeType }) {
  const { _id, name, password, explain, ingredient, like, view } = recipe;
  
  const headerProps = { id: _id, name, like, view, password, explain };
  const bodyProps = { name, explain, ingredient };

  return (
    <>
      <RecipeDetailHeader headerProps={headerProps} />
      <hr className="border-b-2 mt-2" />
      <RecipeDetailBody bodyProps={bodyProps} />
      <hr className="border-b-2 mt-2 mb-2" />
      <RecipeFooter id={_id} password={password} />
    </>
  );
}
