'use client';
// type
import { ObjectId } from "mongodb";
// fetch func
import patchLike from "../function/fetch/patchLike";
// react
import { useState } from "react";

export default function useLikeButtonHandler(like : number){
  const [likeState, setLikeState] = useState(like);

  async function likeButtonHandler (id : ObjectId){
    try{
      await patchLike(id);
    }catch(error){
      throw error;
    }
    setLikeState((pre) => pre + 1);
  }

  return { likeState, likeButtonHandler };
}