// type
import { ObjectId } from "mongodb";
//custom hook
import useRecipeDetailPageMoveButtonHandler from "@/app/@util/hooks/useRecipeDetailPageMoveButtonHandler";
// component
import PasswordDeleteList from "./PasswordDeleteList";

export default function HamburgerList({
  id,
  password,
}: {
  id: ObjectId;
  password: string;
}) {
  return (
    <div className="absolute top-0 right-0 mt-2 w-40 bg-white shadow-lg border rounded opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
      <ul className="text-sm">
        <MoveRecipeDetailList id={id} />
        <DeclarationList />
        <PasswordDeleteList id={id} password={password} />
      </ul>
    </div>
  );
}

function MoveRecipeDetailList({ id }: { id: ObjectId }) {
  const detailButtonHandler = useRecipeDetailPageMoveButtonHandler();

  return (
    <li
      className="p-2 hover:bg-gray-100 cursor-pointer"
      onClick={() => detailButtonHandler(id)}
    >
      레시피 페이지로 이동
    </li>
  );
}

function DeclarationList() {
  return (
    <li className="p-2 hover:bg-gray-100 cursor-pointer text-red-600">신고</li>
  );
}
