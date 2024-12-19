'use client';

import { RecipeType } from "@/types/recipe";
import Image from "next/image";

export default function RecipeCardContainer(
    { name, password, explain, like, view, ingredient }: RecipeType
) {
    let slicedIngredient = [...ingredient];

    if (ingredient.length > 3) {
        slicedIngredient = ingredient.slice(0, 3);
    }

    return (
        <div className="border border-black rounded p-2 mb-3">
            <h3 className="text-2xl font-extrabold text-start mt-2 mb-3">{name}</h3>
            <div className="grid grid-cols-12 gap-2 m-auto">
                <div className="col-span-4 border border-black rounded p-2">
                    <div className="grid grid-cols-12 gap-2 m-auto">
                        {slicedIngredient.map(i => (
                            <div key={i.name} className="col-span-4 relative h-[60px]">
                                <Image
                                    fill
                                    alt={i.name}
                                    src={i.url}
                                    sizes="60px"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-8 border border-black rounded p-2 text-start">
                    {explain}
                </div>
            </div>
        </div>
    )
}