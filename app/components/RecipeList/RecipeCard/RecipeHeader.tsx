export default function RecipeHeader({ name }: { name: string }) {
  return (
    <div className="border border-black rounded-tl rounded-tr border-b-0 p-2">
      <h3 className="font-bold text-xl">{name}</h3>
    </div>
  );
}
