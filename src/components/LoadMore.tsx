const LoadMore = () => {
  return (
    <div className="flex flex-col gap-3 py-10 w-64 items-center justify-center">
      <button className="bg-black border rounded-3xl px-14 py-4 text-white items-center justify-center text-xl font-bold">
        Load More
      </button>
      <span className="text-gray-500">Viewing 1 - 60 of 2152 products</span>
    </div>
  );
};

export default LoadMore;
