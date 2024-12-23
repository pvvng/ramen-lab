// component
import HeartButton from "@/app/components/RecipeList/RecipeCard/Footer/Items/HeartButton";
import View from "@/app/components/RecipeList/RecipeCard/Footer/Items/View";
// type
import { ObjectId } from "mongodb";

export default function LikeAndView({
  id,
  like,
  view,
}: {
  id: ObjectId;
  like: number;
  view: number;
}) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      <HeartButton id={id} like={like} />
      <View view={view} />
    </div>
  );
}