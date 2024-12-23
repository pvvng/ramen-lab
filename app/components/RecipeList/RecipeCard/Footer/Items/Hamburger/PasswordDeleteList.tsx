"use client";
// type
import { ObjectId } from "mongodb";
// custom hook
import useRemoveRecipe from "@/app/@util/hooks/useRemoveRecipe";
// component
import PasswordInput from "./PasswordInput";
// react
import { useState } from "react";

export default function PasswordDeleteList({
  id,
  password,
}: {
  id: ObjectId;
  password: string;
}) {
  const deleteHandler = useRemoveRecipe();

  const [passwordStatus, setPasswordStatus] = useState(false);

  if (passwordStatus) {
    return (
      <li
        className="p-2 hover:bg-gray-100 cursor-pointer text-red-600"
        onClick={() => deleteHandler(id, passwordStatus)}
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
