// type
import { ObjectId } from "mongodb";
// component
import LikeAndView from "./LikeAndView";
import RecipePassWordInput from "./RecipePassWordInput";

interface HeaderPropsType {
  id: ObjectId;
  name: string;
  like: number;
  view: number;
  password : string;
}

export default function RecipeDetailHeader({
  headerProps,
}: {
  headerProps: HeaderPropsType;
}) {
  const { id, name, like, view, password } = headerProps;

  return (
    <>
      <h1 className="text-3xl text-center font-extrabold mt-5">{name}</h1>
      <LikeAndView id={id} like={like} view={view} />
      <RecipePassWordInput id={id} password={password} />
    </>
  );
}
