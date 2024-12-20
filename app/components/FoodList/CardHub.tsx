'use client';

import RamenCardContainer from "../FoodCard/RamenCardContainer";
import useGetFilteredData from "@/app/@util/hooks/useGetFilteredData";

export default function CardHub() {
  const { filteredImages, isLoading, isError } = useGetFilteredData();

  if (isLoading) {
    return (
      <div className="min-h-[200px] mt-3 flex justify-center place-items-center">
        로딩중입니다.
      </div>
    );
  }

  if (isError) {
    <div className="min-h-[200px] mt-3 flex justify-center place-items-center">
      에러가 발생했습니다.
    </div>;
  }

  return filteredImages?.map((imageData, i) => (
    <RamenCardContainer key={imageData.name + i} {...imageData} />
  ));
}
