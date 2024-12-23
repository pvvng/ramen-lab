export default function RecipeExplain({
  explain
}: {
  explain: string;
}) {
  return (
    <div className="sm:mt-0 mt-3 text-start sm:w-1/2 lg:w-2/5 w-full p-2">
      <p className="font-bold text-2xl">레시피 설명</p>
      <ExplainMap explain={explain} />
    </div>
  );
}

function ExplainMap({ explain }: { explain: string }) {
  const splitedExplain = explain.split("\n");

  if (explain === "") return <p>설명 없음</p>;

  return splitedExplain.map((v, i) => <p key={i}>{v}</p>);
}
