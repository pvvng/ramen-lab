"use client";
// store
import { useRecipeStore } from "@/app/store/useRecipeStore";
// custom hook
import usePasswordInputHandler from "./usePasswordListHandler";
// type
import { ObjectId } from "mongodb";

import { useRouter } from "next/navigation";
import { deleteLocalStorageById } from "../function/general/LocalStorage/storage";

export default function useRemoveRecipe() {
  const { handleRecipeDelete } = usePasswordInputHandler();
  const { removeRecipeById } = useRecipeStore();

  const router = useRouter();

  const deleteHandler = async (id: ObjectId, passwordStatus: boolean) => {
    await handleRecipeDelete(id, passwordStatus);

    removeRecipeById(id);

    deleteLocalStorageById(id, "like");

    router.push("/");
  };

  return deleteHandler;
}
