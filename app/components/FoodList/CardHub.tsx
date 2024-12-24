"use client";
// custom hook
import useGetFilteredData from "@/app/util/hooks/useGetFilteredData";
// food card
import RamenCardContainer from "../FoodCard/RamenCardContainer";
import LoadProcessContainer from "../LoadProcessContainer";

export default function CardHub() {
  const { filteredImages, isLoading, isError } = useGetFilteredData();

  if (isLoading || !filteredImages) {
    return <LoadProcessContainer text="로딩중입니다." />;
  }

  if (isError) {
    return <LoadProcessContainer text="에러가 발생했습니다." />;
  }

  return filteredImages?.map((imageData, i) => (
    <RamenCardContainer key={imageData.name + i} {...imageData} />
  ));
}
