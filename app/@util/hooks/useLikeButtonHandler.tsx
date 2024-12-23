"use client";
// type
import { ObjectId } from "mongodb";
// fetch func
import patchLike from "../function/fetch/patchLike";
// react
import { useState } from "react";
import {
  checkStorageAlreadyExist,
  updateLocalStorge,
} from "../function/general/LocalStorage/storage";
// localstorage

export default function useLikeButtonHandler(like: number) {
  const [likeState, setLikeState] = useState(like);

  async function likeButtonHandler(id: ObjectId) {
    try {
      const updateSuccess = await handleLikeState(id);
      const likeCount = updateSuccess ? 1 : 0;
      setLikeState((pre) => pre + likeCount);
    } catch (error) {
      throw error;
    }
  }

  return { likeState, likeButtonHandler };
}

async function handleLikeState(id: ObjectId) {
  const isAlreadyHeartClick = checkStorageAlreadyExist(id, "like");

  if (!isAlreadyHeartClick) {
    return await patchHandler(id);
  }

  alert("이미 좋아요를 누른 레시피입니다.");
  return false;
}

async function patchHandler(id: ObjectId) {
  try {
    await patchLike(id);
    updateLocalStorge(id, "like");

    return true;
  } catch (error: any) {
    const errorMessage = error || "알 수 없는 오류가 발생했습니다.";
    alert(errorMessage);

    return false;
  }
}
