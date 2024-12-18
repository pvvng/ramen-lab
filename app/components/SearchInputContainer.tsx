export default function SearchInputContainer() {
    return (
        <div className="grid grid-cols-12 gap-0 m-0 w-full">
            <input
                type="text"
                className="border border-black h-8 col-span-10 rounded-tl rounded-bl p-2"
                placeholder="라면 / 식재료 검색"
            />
            <button
                className="bg-black border-black text-white h-8 col-span-2 rounded-tr rounded-br"
            >검색</button>
        </div>
    )
}