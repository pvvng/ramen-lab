import usePasswordInputHandler from "@/app/@util/hooks/usePasswordListHandler";
import { Dispatch, SetStateAction } from "react";

export default function PasswordInput({
  password,
  setPasswordStatus,
}: {
  password: string;
  setPasswordStatus: Dispatch<SetStateAction<boolean>>;
}) {
  const { inputRef, handlePasswordInput } = usePasswordInputHandler();

  return (
    <div id="password input">
      <input
        ref={inputRef}
        className="border border-black rounded-tl rounded-bl px-2 h-8 w-20"
        placeholder="비밀번호"
      />
      <button
        className="bg-black rounded-tr rounded-br h-8 text-white px-2"
        onClick={() => handlePasswordInput(password, setPasswordStatus)}
      >
        확인
      </button>
    </div>
  );
}
