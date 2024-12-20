"use client";

import usePostRecipe from "@/app/@util/hooks/usePostRecipe";
import RecipeInputContainer from "./RecipeInput";
import RecipeButton from "./RecipeButton";
import FormErrorMessage from "./FormErrorMessage";
import FormTextarea from "./FormTextarea";

export default function RecipeAppendInputContainer() {
  const { handleSubmit, errorMessage } = usePostRecipe();

  return (
    <>
      <FormErrorMessage errorMessage={errorMessage} />
      <form
        method="POST"
        action="/api/post/recipe"
        onSubmit={handleSubmit} // 폼 제출 시 조건 확인
      >
        <div className="flex gap-2 m-0 w-full">
          <RecipeInputContainer />
          <RecipeButton />
        </div>
        <FormTextarea />
      </form>
    </>
  );
}
