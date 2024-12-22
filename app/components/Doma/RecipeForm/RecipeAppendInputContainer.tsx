"use client";

// custom hook
import usePostRecipe from "@/app/@util/hooks/usePostRecipe";
// form component
import RecipeInputContainer from "./RecipeInput";
import RecipeButton from "./RecipeButton";
import FormErrorMessage from "./FormErrorMessage";
import FormTextarea from "./FormTextarea";

export default function RecipeAppendInputContainer() {
  const { handleSubmit, errorMessage } = usePostRecipe();

  return (
    <>
      <FormErrorMessage errorMessage={errorMessage} />
      <form method="POST" action="/api/post/recipe" onSubmit={handleSubmit}>
        <div className="flex gap-2 m-0 w-full">
          <RecipeInputContainer />
          <RecipeButton />
        </div>
        <FormTextarea />
      </form>
    </>
  );
}
