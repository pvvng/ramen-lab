import RecipeContainer from "./components/CardContainer/RecipeContainer";
import BuildContainer from "./components/CardContainer/BuildContainer";

export default async function Home() {
    return (
        <div className="text-center p-2">
            <h1 className="text-3xl font-semibold m-3">
                라면 교배 연구소
            </h1>
            <BuildContainer />
            <RecipeContainer />
        </div>
    );
}