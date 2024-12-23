// component
import HeartButton from "@/app/components/RecipeList/RecipeCard/Footer/Items/HeartButton";
import View from "@/app/components/RecipeList/RecipeCard/Footer/Items/View";
// type
import { HeaderPropsType } from "./RecipeDetailHeader";
import ShareButton from "@/app/components/RecipeList/RecipeCard/Footer/Items/ShareButton";

export default function LikeAndView({headerProps}: {headerProps: HeaderPropsType}) {
  const {id, like, view, name, explain} = headerProps;

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
      <HeartButton id={id} like={like} />
      <View view={view} />
      <ShareButton name={name} explain={explain} />
      <span>공유</span>
    </div>
  );
}
