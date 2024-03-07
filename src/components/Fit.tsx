import { useState } from "react";
import Tiles from "./Tiles";
const clothingFitsAndSupport = [
  "Slim Fit",
  "Body Fit",
  "Regular Fit",
  "Oversized Fit",
  "Oversized",
  "*Final Sale - Non Returnable*",
  "Regular",
  "Light Support",
  "Medium Support",
  "Compression Fit",
  "High Support",
  "Muscle Fit",
  "Extreme Oversized Fit",
  "Baselayer",
  "Extreme-Oversized",
  "Straight Leg",
  "Tall",
  "Short",
  "Underwear",
];
const Fit = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <span className="flex items-center justify-between mb-2 text-xl font-semibold">
        FIT
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
        <div className="grid grid-cols-1  gap-y-2 items-center justify-center text-center">
          {clothingFitsAndSupport?.map((fit, index) => (
            <Tiles key={index}>{fit}</Tiles>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fit;
