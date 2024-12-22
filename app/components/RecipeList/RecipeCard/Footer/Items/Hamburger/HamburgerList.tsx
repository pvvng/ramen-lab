// type
import { ObjectId } from "mongodb";
// component
import PasswordDeleteList from "./PasswordDeleteList";
import { useRouter } from "next/navigation";

export default function HamburgerList({
  id,
  password,
}: {
  id: ObjectId;
  password: string;
}) {
  const detailButtonHandler = useRecipeDetailPageMoveButtonHandler();

  return (
    <div className="absolute top-0 right-0 mt-2 w-40 bg-white shadow-lg border rounded opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
      <ul className="text-sm">
        <li
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => detailButtonHandler(id)}
        >
          레시피 페이지로 이동
        </li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer text-red-600">
          신고
        </li>
        <PasswordDeleteList id={id} password={password} />
      </ul>
    </div>
  );
}

function useRecipeDetailPageMoveButtonHandler() {
  const router = useRouter();

  const detailButtonHandler = (id: ObjectId) => {
    router.push(`/recipe/${id}`);
  };

  return detailButtonHandler;
}
