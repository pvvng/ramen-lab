"use client";

import { useSlectedImageStore } from "@/app/store/useSlectedImageStore";
import { AWSImageItmeType } from "@/types/aws-image";
import Image from "next/image";

export default function RamenCardContainer({ name, url }: AWSImageItmeType) {
  const { addImage, removeImage, hasImage } = useSlectedImageStore();

  return (
    <div className="border border-black p-2 mt-2">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2 m-auto">
          <Image
            className="w-auto h-auto"
            width={30}
            height={30}
            src={url}
            alt={name}
            priority
          />
        </div>
        <div className="col-span-8 flex place-items-center justify-center">
          {name}
        </div>
        <div className="col-span-2 flex place-items-center justify-center">
          {hasImage(name) ? (
            <button
              className="bg-red-600 border-black text-white px-2 rounded w-[24px] h-[24px]"
              onClick={() => removeImage(name)}
            >
              -
            </button>
          ) : (
            <button
              className="bg-black border-black text-white px-2 rounded w-[24px] h-[24px]"
              onClick={() => addImage({ name, url })}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
