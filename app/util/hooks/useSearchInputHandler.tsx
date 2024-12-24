"use client";

import decomposeHangul from "../function/general/koreanWord/deComposeHangul";

import { useAWSImageStore } from "@/app/store/useAWSImageStore";

import { useEffect, useState } from "react";

export default function useSearchInputHandler() {
  const { filterImages } = useAWSImageStore();

  const [inputValue, setInputValue] = useState(""); // 상태로 입력값 관리

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // 상태 업데이트
  };

  const handleButtonClick = () => {
    filterImages(decomposeHangul(inputValue));
  };

  useEffect(() => {
    filterImages(decomposeHangul(inputValue));
  }, [inputValue]);

  return { inputValue, handleInputChange, handleButtonClick };
}
