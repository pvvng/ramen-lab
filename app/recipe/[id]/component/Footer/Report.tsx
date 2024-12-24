"use client";

import usePatchReport from "@/app/util/hooks/usePatchReport";
import { ObjectId } from "mongodb";

export default function Report({ id }: { id: ObjectId }) {
  const reportPatchHandler = usePatchReport();
  return (
    <button
      className="px-2 h-8 mx-2 bg-gray-100 rounded cursor-pointer text-red-600"
      onClick={() => reportPatchHandler(id)}
    >
      신고
    </button>
  );
}
