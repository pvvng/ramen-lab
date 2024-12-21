import { AWSImageItmeType } from "@/types/aws-image";
import RecipeExplain from "./RecipeExplain";
import RecipeImage from "./RecipeImage";

export default function RecipeBody({
  ingredient,
  explain,
}: {
  ingredient: AWSImageItmeType[];
  explain: string;
}) {
  return (
    <div className="border border-black p-2">
      <RecipeImage ingredient={ingredient} />
      <RecipeExplain explain={explain} />
    </div>
  );
}
