"use client";

import axios from "axios";
import { ObjectId } from "mongodb";
import { Dispatch, SetStateAction, useRef } from "react";

export default function usePasswordInputHandler() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePasswordInput = async (password: string, setPasswordStatus: Dispatch<SetStateAction<boolean>>) => {
    if (inputRef.current) {
      const passwordValidationData = await axios.get<boolean>(
        "/api/get/password",
        {
          params: { target: password, input: inputRef.current.value },
        }
      );

      if (!passwordValidationData.data) {
        alert("잘못된 비밀번호입니다.");
      }

      setPasswordStatus(passwordValidationData.data);
    }
  };

  const handleRecipeDelete = async (id: ObjectId, passwordStatus: boolean) => {
    try {
      const deletedData = await axios.delete("/api/delete/recipe", {
        data: { isPasswordValidate : passwordStatus, id },
      });
      if (deletedData.status === 200) {
        alert("성공적으로 삭제되었습니다.");
      }
    } catch (error) {
      // 에러 처리
      if (axios.isAxiosError(error) && error.response) {
        // 서버에서 반환된 에러 메시지 사용
        alert(
          `${
            error.response.data.message ||
            "삭제 중 문제가 발생했습니다. 다시 시도해주세요."
          }`
        );
      } else {
        // 기타 예외
        alert("알 수 없는 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return { inputRef, handlePasswordInput, handleRecipeDelete };
}
