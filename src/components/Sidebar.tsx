import Color from "./Color";
import Discount from "./Discount";
import Features from "./Features";
import Fit from "./Fit";
import Gender from "./Gender";
import Pattern from "./Pattern";
import Price from "./Price";
import Size from "./Size";
import SortBy from "./SortBy";

const Sidebar = () => {
  return (
    <div className=" w-[30%] flex flex-col gap-8 pt-4 pl-8 overflow-y-scroll h-screen ">
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
      <Pattern />
      <Discount />
      <Price />
    </div>
  );
};

export default Sidebar;
