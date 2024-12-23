import { AWSImageItmeType } from "@/types/aws-image";
import Image from "next/image";

export default function ImageMap({ ingredient }: { ingredient: AWSImageItmeType[] }) {
  return (
    <div className="flex flex-wrap items-center sm:w-1/2 lg:w-2/3 w-full">
      {ingredient.map((v, i) => (
        <div
          key={v.name + i}
          className="relative basis-1/3 aspect-square overflow-hidden"
        >
          <Image src={v.url} alt={v.name} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}