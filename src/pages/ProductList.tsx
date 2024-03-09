import ProductCard from "../components/ProductCard";
import LoadMore from "../components/LoadMore";

const ProductList = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 py-5 gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <LoadMore />
    </div>
  );
};

export default ProductList;
