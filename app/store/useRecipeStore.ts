import { RecipeType } from "@/types/recipe";
import { ObjectId } from "mongodb";
import { create } from "zustand";

// Zustand 스토어 상태와 액션 정의
interface RecipeStoreState {
  recipes: RecipeType[] | undefined;
  setRecipes: (newRecipes: RecipeType[] | undefined) => void;
  removeRecipeById: (id: ObjectId) => void;
  getRecipeById: (id: ObjectId) => RecipeType | undefined; // 특정 요소 반환 함수
}

// Zustand 스토어 생성
export const useRecipeStore = create<RecipeStoreState>((set, get) => ({
  recipes: undefined, // 초기 상태는 undefined
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  removeRecipeById: (id) =>
    set((state) => ({
      recipes: state.recipes?.filter((recipe) => recipe._id !== id),
    })),
  getRecipeById: (id) => {
    const recipes = get().recipes; // 현재 상태의 recipes 가져오기
    return recipes?.find((recipe) => recipe._id === id); // 해당 id의 요소 반환
  },
}));
