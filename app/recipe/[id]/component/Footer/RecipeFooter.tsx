// type
import { ObjectId } from "mongodb";
// component
import RecipePassWordInput from "./RecipePassWordInput";
import Report from "./Report";

export default function RecipeFooter({
  id,
  password,
}: {
  id: ObjectId;
  password: string;
}) {
  return (
    <div className="flex flex-wrap justify-end items-center">
      <Report id={id} />
      <RecipePassWordInput id={id} password={password} />
    </div>
  );
}
