'use client';

import usePostRecipe from "@/app/@util/hooks/usePostRecipe";

export default function RecipeAppendInputContainer() {

    const { handleSubmit, stringIngredient, errorMessage } = usePostRecipe();

    return (
        <>
            {errorMessage && (
                <div className="col-span-12 text-red-500 mb-2">{errorMessage}</div>
            )}
            <form 
                method="POST" 
                action="/api/post/recipe"
                onSubmit={handleSubmit} // 폼 제출 시 조건 확인
            >
                <div className="grid grid-cols-12 gap-2 m-0 w-full">
                    <input
                        type="text"
                        name="name"
                        className="border border-black h-8 col-span-4 rounded p-2"
                        placeholder="레시피 이름"
                    />
                    <input
                        type="text"
                        name="stringPassword"
                        className="border border-black h-8 col-span-4 rounded p-2"
                        placeholder="4~6자리 숫자 비밀번호"
                    />
                    <input 
                        type="hidden" 
                        className="hidden w-[1px] h-[1px]" 
                        name="stringIngredient" 
                        value={stringIngredient} 
                    />
                    <button
                        type="submit"
                        className="bg-black border-black text-white h-8 col-span-4 rounded"
                    >레시피 등록</button>
                </div>
                <textarea 
                    name="explain" 
                    className="resize-none border border-black col-span-4 rounded p-2 w-full h-[150px] mt-3" 
                    placeholder="레시피에 관한 설명 (조리법, 추억 등, 100자 제한)"
                />
            </form>
        </>
    )
}