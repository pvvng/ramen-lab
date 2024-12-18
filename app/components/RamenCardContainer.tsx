export default function RamenCardContainer(){
    return (
        <div className="border border-black p-2 mt-2">
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-4">
                    <div>이미지</div>
                </div>
                <div className="col-span-6">라면이름</div>
                <div className="col-span-2">
                    <button className="bg-black border-black text-white px-2 rounded">+</button>
                </div>
            </div>
        </div>
    )
}