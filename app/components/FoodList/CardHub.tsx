'use client';
// custom hook
import useGetFilteredData from "@/app/@util/hooks/useGetFilteredData";
// food card
import RamenCardContainer from "../FoodCard/RamenCardContainer";
import LoadProcessContainer from "../LoadProcessContainer";

export default function CardHub() {
  const { filteredImages, isLoading, isError } = useGetFilteredData();

  <LoadProcessContainer isLoading={isLoading} isError={isError} />;

  return filteredImages?.map((imageData, i) => (
    <RamenCardContainer key={imageData.name + i} {...imageData} />
  ));
}
