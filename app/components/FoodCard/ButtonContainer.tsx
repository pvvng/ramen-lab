import { useSlectedImageStore } from "@/app/store/useSlectedImageStore";
import { APPEND_STATE } from "./CardButton";

interface ButtonPropsType {
  state: string;
  name: string;
  url: string;
}

export default function ButtonContainer({ state, name, url }: ButtonPropsType) {
  const { addImage, removeImage } = useSlectedImageStore();

  function useHandleClick(state: string, name: string, url: string) {
    if (state === APPEND_STATE) {
      return addImage({ name, url });
    }
  
    return removeImage(name);
  }
  
  return (
    <button
      className={processButtonColor(state) + "text-white px-2 rounded w-[24px] h-[24px]"}
      onClick={() => useHandleClick(state, name, url)}
    >
      {state}
    </button>
  );
}

function processButtonColor(state : string){
  if(state === APPEND_STATE){
    return "bg-black border-black ";
  }

  return "bg-red-600 border-red-600 ";
}