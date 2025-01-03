// type
import { AWSImageItmeType } from "@/types/aws-image";

import Image from "next/image";

export default function CardImage({ name, url }: AWSImageItmeType) {
  return (
    <div className="flex-[3_3_0%] text-center">
      <Image
        width={30}
        height={30}
        src={url}
        alt={name}
        priority
        className="w-auto h-auto md:ml-5"
      />
    </div>
  );
}
