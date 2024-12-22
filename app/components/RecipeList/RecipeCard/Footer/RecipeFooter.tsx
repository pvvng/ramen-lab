// type
import { ObjectId } from "mongodb";
// component
import HeartButton from "./Items/HeartButton";
import View from "./Items/View";
import ShareButton from "./Items/ShareButton";
import Hamburger from "./Items/Hamburger/Hamburger";

interface PropsType {
  _id: ObjectId;
  password: string;
  view: number;
  like: number;
  name: string;
  explain: string;
}

export default function RecipeFooter({ props }: { props: PropsType }) {
  return (
    <div className="rounded-bl rounded-br border border-t-0 border-black">
      <div className="flex justify-between items-center space-x-4 pt-4 border-t p-4">
        <div className="flex items-center space-x-4">
          <HeartButton id={props._id} like={props.like} />
          <View view={props.view} />
        </div>
        <div className="flex items-center space-x-4">
          <ShareButton name={props.name} explain={props.explain} />
          <Hamburger id={props._id} password={props.password} />
        </div>
      </div>
    </div>
  );
}
