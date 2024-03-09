import Sidebar from "../components/Sidebar";
import ProductList from "./ProductList";

const Body = () => {
  return (
    <div className="h-full flex w-full pt-32">
      <Sidebar />
      <ProductList />
    </div>
  );
};

export default Body;
