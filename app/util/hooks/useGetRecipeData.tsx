"use client";

// fetch func
import getRecipeData from "@/app/util/function/fetch/getRecipeData";
// zustand store
import { useRecipeStore } from "@/app/store/useRecipeStore";
// type
import { RecipeType } from "@/types/recipe";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function useGetRecipeData() {
  const recipesInStore = useRecipeStore((state) => state.recipes);

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
    enabled: !recipesInStore,
  });

  useStoreRecipes(recipes, recipesInStore);

  return { isLoading, isError };
}

export function useStoreRecipes(
  recipes: RecipeType[] | undefined,
  recipesInStore: RecipeType[] | undefined
) {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    if (recipes && !recipesInStore) {
      setRecipes(recipes);
    }
  }, [recipes]);
}
