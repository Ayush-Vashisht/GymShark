const ProductCard = () => {
  return (
    <div className="flex flex-col relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-6 h-6 border-4 rounded-full border-white absolute top-4 right-2   bg-white "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>

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
