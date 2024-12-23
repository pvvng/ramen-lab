import ShareButton from "@/app/components/RecipeList/RecipeCard/Footer/Items/ShareButton";

export default function RecipeExplain({
  name,
  explain,
}: {
  name: string;
  explain: string;
}) {
  return (
    <div className="sm:mt-0 mt-3 sm:mx-0 mx-6 text-start sm:w-1/2 lg:w-1/3 w-full p-2">
      <p className="font-bold text-2xl">레시피 설명</p>
      <ExplainMap explain={explain} />
      <div className="text-end">
        <ShareButton name={name} explain={explain} />
      </div>
    </div>
  );
}

function ExplainMap({ explain }: { explain: string }) {
  const splitedExplain = explain.split("\n");

  if (explain === "") return <p>설명 없음</p>;

  return splitedExplain.map((v, i) => <p key={i}>{v}</p>);
}
