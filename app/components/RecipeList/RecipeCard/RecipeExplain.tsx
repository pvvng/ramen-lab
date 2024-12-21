export default function RecipeExplain({ explain }: { explain: string }) {
  return (
    <div className="p-2 truncate mt-2">
      {explain === "" ? "설명 없음" : explain}
    </div>
  );
}
