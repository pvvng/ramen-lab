"use client";

import postRecommend from "../function/fetch/postRecommend";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function useRecommendForm() {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const router = useRouter();

  const handleButtonClick = async () => {
    if (textAreaRef.current) {
      const recommend = textAreaRef.current.value;

      await tryCatchFetchRecommend(recommend);
      
      textAreaRef.current.value = "";
    }
  };

  return { textAreaRef, handleButtonClick };
}

async function tryCatchFetchRecommend(recommend: string) {
  try {
    processError(recommend);
    await fetchRecommend(recommend);
  } catch (error: any) {
    alertError(error);
  }
}

function alertError(error: any) {
  const errorMessage = error.message || "알 수 없는 오류가 발생했습니다.";
  alert(errorMessage);
}

function processError(recommend: string) {
  checkInputValidation(recommend);
  checkInputLength(recommend);
}

function checkInputValidation(recommend: string) {
  if (!recommend) {
    throw new Error("입력값이 확인되지 않습니다.");
  }
}

function checkInputLength(recommend: string) {
  if (recommend.length < 1 || recommend.length > 100) {
    throw new Error("재료 추천은 1~100자 까지 가능합니다.");
  }
}

async function fetchRecommend(recommend: string) {
  await postRecommend(recommend);
  alert("재료 추천이 성공적으로 접수되었습니다. 검토 후 업데이트하겠습니다.");
  return true;
}
