import DomaContainer from "../Doma/DomaContainer";
import CardHub from "./CardHub";
import SearchInputContainer from "./SearchInputContainer";

export default function BuildContainer() {

  return (
    <div className="mt-3 grid grid-cols-12 gap-2">
      <div className="sm:col-span-5 md:col-span-6 col-span-12 border border-black rounded p-2 h-[300px] overflow-scroll">
        <SearchInputContainer />
        <CardHub />
      </div>
      <div className="sm:col-span-7 md:col-span-6 col-span-12">
        <DomaContainer />
      </div>
    </div>
  );
}
