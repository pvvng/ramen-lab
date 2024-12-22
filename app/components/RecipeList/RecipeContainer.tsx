"use client";

import RecipeProcessContainer from "./RecipeProcessContainer";

export default function RecipeContainer() {
  return (
    <div className="p-2 border-black border rounded mt-3 max-h-[300px] overflow-scroll">
      <div className="flex flex-wrap items-center">
        <RecipeProcessContainer />
      </div>
    </div>
  );
}
