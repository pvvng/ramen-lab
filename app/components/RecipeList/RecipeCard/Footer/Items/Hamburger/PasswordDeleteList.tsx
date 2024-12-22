"use client";
// type
import { ObjectId } from "mongodb";
// custom hook
import usePasswordInputHandler from "@/app/@util/hooks/usePasswordListHandler";
// component
import PasswordInput from "./PasswordInput";
// react
import { useState } from "react";
import { useRecipeStore } from "@/app/store/useRecipeStore";

export default function PasswordDeleteList({
  id,
  password,
}: {
  id: ObjectId;
  password: string;
}) {
  const { handleRecipeDelete } = usePasswordInputHandler();
  const { removeRecipeById } = useRecipeStore();
  const [passwordStatus, setPasswordStatus] = useState(false);

  const deleteHandler = async () => {
    await handleRecipeDelete(id, passwordStatus);
    removeRecipeById(id);
  };

  if (passwordStatus) {
    return (
      <li
        className="p-2 hover:bg-gray-100 cursor-pointer text-red-600"
        onClick={deleteHandler}
      >
        삭제
      </li>
    );
  }

  return (
    <li className="p-2 hover:bg-gray-100 cursor-pointer">
      <PasswordInput
        password={password}
        setPasswordStatus={setPasswordStatus}
      />
    </li>
  );
}
