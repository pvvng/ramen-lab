export default function CardName({ name }: { name: string }) {
  return (
    <div className="flex-[3_3_0%] truncate">
      {name}
    </div>
  );
}
