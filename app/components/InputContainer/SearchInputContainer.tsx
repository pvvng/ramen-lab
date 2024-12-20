"use client";

import decomposeHangul from "@/app/@util/function/general/koreanWord/deComposeHangul";
import { useAWSImageStore } from "@/app/store/useAWSImageStore";
import { useEffect, useState } from "react";

export default function SearchInputContainer() {
  const { filterImages } = useAWSImageStore();

  const [inputValue, setInputValue] = useState(""); // 상태로 입력값 관리

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // 상태 업데이트
  };

  useEffect(() => {
    filterImages(decomposeHangul(inputValue));
  }, [inputValue]);

  return (
    <div className="grid grid-cols-12 gap-0 m-0 w-full">
      <input
        type="text"
        value={inputValue} // 상태로 값 바인딩
        onChange={handleInputChange} // 상태 업데이트 함수
        className="border border-black h-8 col-span-10 rounded-tl rounded-bl p-2"
        placeholder="라면 / 식재료 검색"
      />
      <button
        className="bg-black border-black text-white h-8 col-span-2 rounded-tr rounded-br"
        onClick={() => {
          filterImages(decomposeHangul(inputValue));
        }}
      >
        검색
      </button>
    </div>
  );
}
