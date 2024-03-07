import Gender from "./Gender";
import SortBy from "./SortBy";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full  w-[15%] gap-5 py-5 px-4">
      <span className="flex items-center justify-between border-b text-xl font-semibold">
        FILTER & SORT
        <span className="text-sm text-gray-400">Clear All</span>
      </span>
      <SortBy/>
      <Gender/>
      <span>SIZE</span>
      <span>FEATURES</span>
      <span>FIT</span>
      <span>COLOR</span>
      <span>PATTERN</span>
      <span>DISCOUNT</span>
      <span>PRICE</span>
    </div>
  );
};

export default Sidebar;
