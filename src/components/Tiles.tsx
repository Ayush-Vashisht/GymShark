import { ReactNode, useState } from "react";
type Props = {
  children: ReactNode;
};
const Tiles = ({ children }: Props) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`border border-gary-400 p-4 w-24  text-center items-center justify-center ${
        selected ? "bg-black text-white" : ""
      }`}
      onClick={() => setSelected(!selected)}
    >
      {children}
    </div>
  );
};

export default Tiles;
