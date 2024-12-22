"use client";
// type
import { ObjectId } from "mongodb";
// fetch func
import patchLike from "../function/fetch/patchLike";
// react
import { useState } from "react";
// localstorage
import {
  checkLikeAlreadyExist,
  updateLocalStorge,
} from "../function/general/LocalStorage/likes";

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
  const isAlreadyHeartClick = checkLikeAlreadyExist(id);

  if (!isAlreadyHeartClick) {
    await patchLike(id);
    updateLocalStorge(id);
    return true;
  }

  alert("이미 좋아요를 누른 레시피입니다.");
  return false;
}
