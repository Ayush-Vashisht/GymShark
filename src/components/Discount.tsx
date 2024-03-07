import { useState } from "react";
import Tiles from "./Tiles";

const percentages = ["10%", "20%", "30%", "40%", "50%", "60%", "70%"];
const Discount = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <span className="flex items-center justify-between mb-2 text-xl font-semibold">
        DISCOUNT
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </span>
      {open && (
        <div className="grid grid-cols-2 gap-y-2   w-full">
          {percentages.map((percentage, index) => (
            <Tiles key={index}>{percentage}</Tiles>
          ))}
        </div>
      )}
    </div>
  );
};

export default Discount;
