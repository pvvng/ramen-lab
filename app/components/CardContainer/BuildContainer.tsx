'use client';

import DomaContainer from "./DomaContainer";
import RamenCardContainer from "./RamenCardContainer";
import SearchInputContainer from "../InputContainer/SearchInputContainer";
import useGetFilteredData from "../../@util/hooks/useGetFilteredData";

export default function BuildContainer() {

    const { filteredImages, isLoading, isError } = useGetFilteredData();

    return (
        <div className="mt-3 grid grid-cols-12 gap-2">
            <div className="sm:col-span-5 md:col-span-6 col-span-12 border border-black rounded p-2 h-[300px] overflow-scroll">
                <SearchInputContainer />
                {
                    isLoading ?
                    <div className="min-h-[200px] mt-3 flex justify-center place-items-center">
                        로딩중입니다
                    </div>:
                    isError ? 
                    <div className="min-h-[200px] mt-3 flex justify-center place-items-center">
                        에러가 발생했습니다.
                    </div>:
                    filteredImages?.map((v, i) => <RamenCardContainer key={v.name} {...v} />)
                }
            </div>
            <div className="sm:col-span-7 md:col-span-6 col-span-12">
                <DomaContainer />
            </div>
        </div>
    )

}