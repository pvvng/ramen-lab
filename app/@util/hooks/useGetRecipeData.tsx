'use client';

// fetch func
import getRecipeData from "@/app/@util/function/fetch/getRecipeData";

import { useQuery } from "@tanstack/react-query";

export default function useGetRecipeData(){
  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipe-data"],
    queryFn: () => getRecipeData(),
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return {recipes, isLoading, isError};
}