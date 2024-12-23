// type
import { ObjectId } from "mongodb";
// component
import LikeAndView from "./LikeAndView";

export interface HeaderPropsType {
  id: ObjectId;
  name: string;
  like: number;
  view: number;
  password : string;
  explain : string;
}

export default function RecipeDetailHeader({
  headerProps,
}: {
  headerProps: HeaderPropsType;
}) {
  const { id, name, password } = headerProps;

  return (
    <>
      <h1 className="text-3xl text-center font-extrabold mt-5">{name}</h1>
      <LikeAndView headerProps={headerProps} />
    </>
  );
}
