'use client';

import getRecipeData from "@/app/@util/function/fetch/getRecipeData";
import { useQuery } from "@tanstack/react-query";
import RecipeCardContainer from "./RecipeCard/RecipeCardContainer";
import LoadProcessContainer from "../LoadProcessContainer";

export default function RecipeContainer(){

    const {data:recipes, isLoading, isError} = useQuery({
        queryKey : ['recipe-data'],
        queryFn : () => getRecipeData(),
        staleTime : 60 * 60 * 1000,
        gcTime : 60 * 60 * 1000,
        refetchOnWindowFocus : false,
    });

    <LoadProcessContainer isLoading={isLoading} isError={isError} />;

    return (
        <div className="p-2 border-black border rounded mt-3 h-[300px] overflow-scroll">
            <div className="flex flex-wrap items-center">
                {
                    isLoading || !recipes ?
                    <p>로딩중입니다.</p>:
                    isError?
                    <p>에러가 발생했습니다.</p>:
                    recipes.map(v => <RecipeCardContainer key={v.password} recipeData={v} />)
                }
            </div>
        </div>
    )
}