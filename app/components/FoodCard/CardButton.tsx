"use client";

// store
import { useSlectedImageStore } from "@/app/store/useSlectedImageStore";
// type
import { AWSImageItmeType } from "@/types/aws-image";
import ButtonContainer from "./ButtonContainer";

export const APPEND_STATE = "+";
export const REMOVE_STATE = "-";

export default function CardButton({ name, url }: AWSImageItmeType) {
  const { hasImage } = useSlectedImageStore();

  return (
    <div className="flex-[3_3_0%] text-end md:mr-5">
      {hasImage(name) ? (
        <ButtonContainer state={REMOVE_STATE} name={name} url={url} />
      ) : (
        <ButtonContainer state={APPEND_STATE} name={name} url={url} />
      )}
    </div>
  );
}
