import RecipeAppendInputContainer from "./RecipeForm/RecipeAppendInputContainer";
import SelectedImageContainer from "./SelectedImageContainer";

export default function DomaContainer() {
  return (
    <div className="border border-black p-2 rounded h-[300px] overflow-scroll">
      <RecipeAppendInputContainer />
      <SelectedImageContainer />
    </div>
  );
}