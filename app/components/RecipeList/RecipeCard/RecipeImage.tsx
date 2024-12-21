import { AWSImageItmeType } from "@/types/aws-image";
import Image from "next/image";

export default function RecipeImage({
  ingredient,
}: {
  ingredient: AWSImageItmeType[];
}) {
  let slicedIngredient = [...ingredient];

  if (ingredient.length > 3) {
    slicedIngredient = ingredient.slice(0, 3);
  }

  return (
    <div className="flex justify-center items-center w-[120px] m-auto">
      {slicedIngredient.map((i) => (
        <div key={i.name} className="w-[40px]">
          <Image
            src={i.url}
            alt={i.name}
            width={40}
            height={40}
            className="m-auto h-auto"
            priority
          />
        </div>
      ))}
    </div>
  );
}
