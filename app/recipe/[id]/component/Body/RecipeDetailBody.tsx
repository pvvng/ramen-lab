// type
import { AWSImageItmeType } from "@/types/aws-image";
// component
import ImageMap from "./ImageMap";
import RecipeExplain from "./RecipeExplain";

interface BodyPropsType {
  name: string;
  explain: string;
  ingredient: AWSImageItmeType[];
}

export default function RecipeDetailBody({
  bodyProps,
}: {
  bodyProps: BodyPropsType;
}) {
  const { explain, ingredient } = bodyProps;

  return (
    <div className="text-center p-3 pt-5 pb-5 container mx-auto">
      <div className="flex flex-wrap m-auto">
        <ImageMap ingredient={ingredient} />
        <RecipeExplain explain={explain} />
      </div>
    </div>
  );
}
