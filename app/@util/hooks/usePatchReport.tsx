'use client';

import { ObjectId } from "mongodb";
import patchReport from "../function/fetch/patchReport";

export default function usePatchReport(){
  const reportPatchHandler = async(id : ObjectId) => {
    try{
      await patchReport(id);
      alert("신고 접수가 완료되었습니다");
    }catch(error){
      const errorMessage = error || "알 수 없는 오류가 발생했습니다.";
      alert(errorMessage);
    }
  }

  return reportPatchHandler;
}