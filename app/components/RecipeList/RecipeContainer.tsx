'use client';

import getRecipeData from "@/app/@util/function/fetch/getRecipeData";
import { useQuery } from "@tanstack/react-query";
import RecipeCardContainer from "./RecipeCard/RecipeCardContainer";

export default function RecipeContainer(){

    const {data:recipes, isLoading, isError} = useQuery({
        queryKey : ['recipe-data'],
        queryFn : () => getRecipeData(),
        staleTime : 60 * 60 * 1000,
        gcTime : 60 * 60 * 1000,
        refetchOnWindowFocus : false,
    });

    return (
        <div className="p-2 border-black border rounded mt-3 h-[300px] overflow-scroll">
            <div className="flex flex-wrap items-center">
                {
                    recipes &&
                    recipes.map(v => <RecipeCardContainer key={v.password} recipeData={v} />)
                }
            </div>
        </div>
    )
}