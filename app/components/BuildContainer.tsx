import DomaContainer from "./DomaContainer";
import RamenCardContainer from "./RamenCardContainer";
import SearchInputContainer from "./SearchInputContainer";

export default function BuildContainer() {
    return (
        <div className="mt-3">
            <div className="grid grid-cols-12 gap-2">
                <div className="sm:col-span-4 md:col-span-6 col-span-12 border border-black rounded p-2 max-h-[300px] overflow-scroll">
                    <SearchInputContainer />
                    {
                        Array.from({length : 10}).map((v, i) => <RamenCardContainer key={i} />)
                    }
                </div>
                <div className="sm:col-span-8 md:col-span-6 col-span-12">
                    <DomaContainer />
                </div>
            </div>
        </div>
    )

}