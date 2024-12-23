"use client";

import { ObjectId } from "mongodb";
import patchReport from "../function/fetch/patchReport";
import {
  checkStorageAlreadyExist,
  updateLocalStorge,
} from "../function/general/LocalStorage/storage";

export default function usePatchReport() {
  const reportPatchHandler = async (id: ObjectId) => {
    const isAlreadyHeartClick = checkStorageAlreadyExist(id, "report");
    if (!isAlreadyHeartClick) {
      return await patchHandler(id);
    }

    alert("이미 신고한 레시피입니다.");
    return false;
  };

  return reportPatchHandler;
}

async function patchHandler(id: ObjectId) {
  try {
    await patchReport(id);
    updateLocalStorge(id, "report");

    alert("신고 접수가 완료되었습니다");
    return true;
  } catch (error) {
    const errorMessage = error || "알 수 없는 오류가 발생했습니다.";

    alert(errorMessage);

    return false;
  }
}
