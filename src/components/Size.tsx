import { useState } from "react";
import Tiles from "./Tiles";

const sizeArr: string[] = [
  "XXS",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",

  "3XL",

  "1 Size",

  "No Size",

  "10",

  "32B/C",

  "32D/DD",

  "32E/F",

  "34B/C",

  "34D/DD",

  "36B/C",

  "38B/C",

  "40B/C",

  "M 10 / W 11",

  "M 11 / W 12",

  "M 12 / W 13",

  "M 13 / W 14",

  "M 5 / W 6",

  "M 6 / W 7",

  "M 7 / W 8",

  "M 8 / W 9",

  "M 9 / W 10",

  "ONE - SIZE",
];
const Size = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="">
      <span className="flex items-center justify-between mb-2 text-xl font-semibold">
        Size
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
          {sizeArr.map((arr, index) => (
            <Tiles key={index}>{arr}</Tiles>
          ))}
        </div>
      )}
    </div>
  );
};

export default Size;
