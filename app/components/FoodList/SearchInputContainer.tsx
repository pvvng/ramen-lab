"use client";
// input handler custom hook
import useSearchInputHandler from "@/app/util/hooks/useSearchInputHandler";

export default function SearchInputContainer() {
  const { inputValue, handleInputChange, handleButtonClick } =
    useSearchInputHandler();

  return (
    <div className="grid grid-cols-12 gap-0 m-0 w-full">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-black h-8 col-span-10 rounded-tl rounded-bl p-2"
        placeholder="라면 / 식재료 검색"
      />
      <button
        className="bg-black border-black text-white h-8 col-span-2 rounded-tr rounded-br"
        onClick={handleButtonClick}
      >
        검색
      </button>
    </div>
  );
}
