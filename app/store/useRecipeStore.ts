// type
import { RecipeType } from "@/types/recipe";
import { ObjectId } from "mongodb";
// zustand
import { create } from "zustand";

// Zustand 스토어 상태와 액션 정의
interface RecipeStoreState {
  recipes: RecipeType[] | undefined;
  setRecipes: (newRecipes: RecipeType[] | undefined) => void;
  removeRecipeById: (id: ObjectId) => void;
}

// Zustand 스토어 생성
export const useRecipeStore = create<RecipeStoreState>((set) => ({
  recipes: undefined, // 초기 상태는 undefined
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  removeRecipeById: (id) =>
    set((state) => ({
      recipes: state.recipes?.filter((recipe) => recipe._id !== id),
    })),
}));
