import { useSlectedImageStore } from "@/app/store";
import RecipeAppendInputContainer from "../InputContainer/RecipeAppendInputContainer";
import RamenCardContainer from "./RamenCardContainer";

export default function DomaContainer(){

    const { images } = useSlectedImageStore();

    return(
        <div className="border border-black p-2 rounded h-[300px] overflow-scroll">
            <RecipeAppendInputContainer />
            {
                images.length === 0 ?
                <p className="min-h-[200px] mt-3 flex justify-center place-items-center">
                    선택된 레시피가 없습니다.
                </p>:
                images.map(v =>  <RamenCardContainer key={v.name} {...v} />)
            }
        </div>
    )
}