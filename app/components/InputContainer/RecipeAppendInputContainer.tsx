export default function RecipeAppendInputContainer() {
    return (
        <div className="grid grid-cols-12 gap-2 m-0 w-full">
            <input
                type="text"
                className="border border-black h-8 col-span-4 rounded p-2"
                placeholder="레시피 이름"
            />
            <input
                type="text"
                className="border border-black h-8 col-span-4 rounded p-2"
                placeholder="비밀번호"
            />
            <button
                className="bg-black border-black text-white h-8 col-span-4 rounded"
            >레시피 등록</button>
        </div>
    )
}