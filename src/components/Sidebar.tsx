import Color from "./Color";
import Features from "./Features";
import Fit from "./Fit";
import Gender from "./Gender";
import Pattern from "./Pattern";
import Size from "./Size";
import SortBy from "./SortBy";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full  w-[15%] gap-5 py-5 px-4">
      <span className="flex items-center justify-between border-b text-xl font-semibold">
        FILTER & SORT
        <span className="text-sm text-gray-400">Clear All</span>
      </span>
      <SortBy />
      <Gender />
      <Size />
      <Features />
      <Fit />
      <Color />
      <Pattern/>
      <span>DISCOUNT</span>
      <span>PRICE</span>
    </div>
  );
};

export default Sidebar;
