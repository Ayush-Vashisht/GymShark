import { useState } from "react";

const colors = [
  "Black",
  "Blue",
  "Brown",
  "Green",
  "Grey",
  "Orange",
  "Pink",
  "Purple",
  "Red",
  "White",
  "Yellow",
];
const Color = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <span className="flex items-center justify-between mb-2 text-xl font-semibold">
        COLOR
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
        <div className="grid grid-cols-2  gap-2 items-center justify-center text-center">
          {colors?.map((color, index) => (
            <div key={index}>
              <div
                className="border rounded-full w-6 h-6  p-2 "
                style={{
                  backgroundColor: color,
                  width: "100px",
                  height: "100px",
                  margin: "10px",
                }}
              ></div>
              <span>{color}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Color;
