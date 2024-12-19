'use client';

import { useSlectedImageStore } from "@/app/store";
import { validateIngredient, validateRequest } from "../function/general/validateRecipeRequest";
import { useState } from "react";

/** 레시피 제작에 사용되는 selected images와 form 제출 핸들러 함수 반환하는 커스텀 훅 */
export default function usePostRecipe(){

    // zustand selected ingredient store
    const { images } = useSlectedImageStore();

    // error message state
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // 기본 폼 제출 방지
        event.preventDefault();
        // 폼 데이터 수집
        const formData = new FormData(event.target as HTMLFormElement);
        const name = formData.get("name") as string;
        const password = formData.get("stringPassword") as string;
        const explain = formData.get("explain") as string;

        // 유효성 검사
        const requestError = validateRequest(name, parseInt(password), explain);
        const ingredientError = validateIngredient(images);

        if (requestError || ingredientError) {
            setErrorMessage(requestError || ingredientError); // 에러 메시지 설정
            return;
        }

        // 유효성 검사 통과 -> 폼 제출
        setErrorMessage(null); // 에러 메시지 초기화
        (event.target as HTMLFormElement).submit();
    };

    return { handleSubmit, stringIngredient : JSON.stringify(images), errorMessage };
}