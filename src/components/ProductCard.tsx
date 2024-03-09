const ProductCard = () => {
  return (
    <div className="flex flex-col ">
      <img
        src="https://cdn.shopify.com/s/files/1/0156/6146/products/EssentialPantBlackA2A7T-BBBB1_384x.jpg?v=1660721986"
        className="my-2 "
      />
      <div className="flex items-center justify-between">
        <span className="text-xl">Essential Oversized Joggers</span>
        <span className="flex gap-1 items-center justify-center font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          4.4
        </span>
      </div>
      <span className="text-gray-500 ">Oversized</span>
      <span className="text-gray-500 ">Black</span>
      <span className="font-semibold text-xl ">$44</span>
    </div>
  );
};

export default ProductCard;
