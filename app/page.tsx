import RecipeContainer from "./components/RecipeList/RecipeContainer";
import BuildContainer from "./components/BuildContainer";
import RecommendForm from "./components/RecommendForm";

export default async function Home() {
  return (
    <div className="text-center p-2">
      <h1 className="text-3xl font-semibold m-3">라면 조합 연구소</h1>
      <BuildContainer />
      <RecipeContainer />
      <RecommendForm />
    </div>
  );
}
