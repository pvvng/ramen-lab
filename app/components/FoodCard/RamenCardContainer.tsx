// card components
import CardButton from "./CardButton";
import CardImage from "./CardImage";
import CardName from "./CardName";
// type
import { AWSImageItmeType } from "@/types/aws-image";

export default function RamenCardContainer(
  { name, url }: AWSImageItmeType
) {
  return (
    <div className="border border-black p-2 mt-2 rounded">
      <div className="flex w-full items-center gap-2">
        <CardImage name={name} url={url} />
        <CardName name={name} />
        <CardButton name={name} url={url} />
      </div>
    </div>
  );
}
