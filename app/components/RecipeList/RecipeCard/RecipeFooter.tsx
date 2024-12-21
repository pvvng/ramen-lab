'use client';

import { useRouter } from "next/navigation";
import { EyeSVG, HamburgerSVG, HeartSVG, RefreshSVG, ShareSVG } from "./SVGContainer";

interface PropsType {
  password: string;
  view: number;
  like: number;
}

export default function RecipeFooter({ password, view, like }: PropsType) {
  return (
    <div className="rounded-bl rounded-br border border-t-0 border-black">
      <div className="flex justify-between items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center space-x-4">
          <RefreshButton />
        </div>
        <div className="flex items-center space-x-4">
          <HeartButton />
          <EyeSVG />
          <ShareSVG />
          <HamburgerSVG />
        </div>
      </div>
    </div>
  );
}

function RefreshButton (){
  const router = useRouter();
  return (
    <button className="hover:rotate-180 transition duration-500 ease-in-out" onClick={() => router.refresh()}>
      <RefreshSVG />
    </button>
  )
}

function HeartButton(){
  return (
    <button className="">
      <HeartSVG />
    </button>
  )
}

function PasswordInput() {
  return (
    <>
      <input
        className="border border-black rounded-tl rounded-bl px-2 h-8 w-20"
        placeholder="비밀번호"
      />
      <button className="bg-black rounded-tr rounded-br h-8 text-white px-2">
        확인
      </button>
    </>
  );
}
