"use client";

// type
import { ObjectId } from "mongodb";
// svg
// custom hook
import useLikeButtonHandler from "@/app/@util/hooks/useLikeButtonHandler";
import { HeartSVG } from "../../SVGContainer";

export default function HeartButton({
  id,
  like,
}: {
  id: ObjectId;
  like: number;
}) {
  const { likeState, likeButtonHandler } = useLikeButtonHandler(like);

  return (
    <>
      <button
        onClick={() => likeButtonHandler(id)}
      >
        <HeartSVG />
      </button>
      <span>{likeState}</span>
    </>
  );
}