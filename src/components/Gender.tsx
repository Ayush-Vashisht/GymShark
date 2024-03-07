import { useState } from "react";

const Gender = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="">
          <span className="flex items-center justify-between mb-2 text-xl font-semibold">
            GENDER
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
            <div className="flex gap-3 items-center justify-center text-center">
                <div className="border border-gary-400 p-4 w-1/2">
                    Womens
                </div>
                <div className="border border-gary-400 p-4 w-1/2">
                    Mens
                </div>
            </div>
          )}
        </div>
      );
    };
    
export default Gender