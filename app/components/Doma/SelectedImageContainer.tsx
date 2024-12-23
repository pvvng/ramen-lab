"use client";

// zustand
import { useSlectedImageStore } from "@/app/store/useSlectedImageStore";
// card container
import RamenCardContainer from "../FoodCard/RamenCardContainer";

export default function SelectedImageContainer() {
  const { images } = useSlectedImageStore();

  if (images.length === 0) {
    return (
      <p className="min-h-[80px] flex justify-center items-center">
        레시피에 들어갈 재료를 선택하세요.
      </p>
    );
  }

  return (
    <>
      <p className="text-center mb-2">
        상위 세개 재료가 대표 이미지로 설정됩니다.
      </p>
      {images.map((v) => (
        <RamenCardContainer key={v.name} {...v} />
      ))}
    </>
  );
}
