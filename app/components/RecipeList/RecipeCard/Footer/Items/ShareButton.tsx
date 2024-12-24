'use client';

import copyToClipboard from "@/app/util/function/general/ClipBoard";
import { ShareSVG } from "../../SVGContainer";

export default function ShareButton({ name, explain }: { name: string; explain: string }) {
  return (
    <button
      onClick={() => {
        copyToClipboard(name, explain);
      }}
    >
      <ShareSVG />
    </button>
  );
}
