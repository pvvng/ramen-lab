'use client';

// type
import { ObjectId } from "mongodb";

import { useRouter } from "next/navigation";

export default function useRecipeDetailPageMoveButtonHandler(){
  const router = useRouter();

  const detailButtonHandler = (id: ObjectId) => {
    router.push(`/recipe/${id}`);
  };

  return detailButtonHandler;
}