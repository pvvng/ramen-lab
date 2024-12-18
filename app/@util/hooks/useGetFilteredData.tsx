import { useAWSImageStore } from "@/app/store";
import { useQuery } from "@tanstack/react-query";
import getImages from "../function/fetch/getImages";
import { useEffect } from "react";

export default function useGetFilteredData(){
    const { filteredImages, setImages } = useAWSImageStore();

    const { data, isLoading, isError } = useQuery({
        queryKey : ['ramen-image'],
        queryFn : () => getImages(),
        staleTime : 60 * 60 * 1000,
        gcTime : 60 * 60 * 1000,
        refetchOnWindowFocus : false,
    });

    // 데이터가 정의되어 있을 때만 스토어에 설정
    useEffect(() => {
        if (data) {
            setImages(data); // Zustand 스토어에 데이터 설정
        }
    }, [data, setImages]); // data가 변경될 때만 실행

    return { filteredImages, isLoading, isError };
}