"use client";
// custom hook
import useRemoveRecipe from "@/app/@util/hooks/useRemoveRecipe";
// component
import PasswordInput from "@/app/components/RecipeList/RecipeCard/Footer/Items/Hamburger/PasswordInput";
// type
import { ObjectId } from "mongodb";

import { useState } from "react";

export default function RecipePassWordInput({
  id,
  password,
}: {
  id: ObjectId;
  password: string;
}) {
  const [passwordStatus, setPasswordStatus] = useState(false);

  return (
    <div id="password-input" className="text-end">
      {passwordStatus ? (
        <DeleteButton id={id} passwordStatus={passwordStatus} />
      ) : (
        <PasswordInput
          password={password}
          setPasswordStatus={setPasswordStatus}
        />
      )}
    </div>
  );
}

function DeleteButton({
  id,
  passwordStatus,
}: {
  id: ObjectId;
  passwordStatus: boolean;
}) {
  const deleteHandler = useRemoveRecipe();

  return (
    <button
      className="h-8 px-2 text-red-600"
      onClick={() => deleteHandler(id, passwordStatus)}
    >
      삭제
    </button>
  );
}
