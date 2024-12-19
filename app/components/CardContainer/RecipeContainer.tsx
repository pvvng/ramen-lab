'use client';

import getRecipeData from "@/app/@util/function/fetch/getRecipeData";
import { useQuery } from "@tanstack/react-query";
import RecipeCardContainer from "./RecipeCardContainer";

export default function RecipeContainer(){

    const {data, isLoading, isError} = useQuery({
        queryKey : ['recipe-data'],
        queryFn : () => getRecipeData(),
        staleTime : 60 * 60 * 1000,
        gcTime : 60 * 60 * 1000,
        refetchOnWindowFocus : false,
    });

    console.log(data);

    return (
        <div className="p-2 border-black border rounded mt-3 min-h-[300px] overflow-scroll">
            {
                data &&
                data.map(v => <RecipeCardContainer key={v.password} {...v} />)
            }
        </div>
    )
}