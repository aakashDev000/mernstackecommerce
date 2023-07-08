const SearchBar = () => {
  return (
    <form className="max-w-sm px-2 ">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Here..."
          className="w-full py-3 pl-12 pr-4 text-blue-500 dark:placeholder-black rounded-md outline-none bg-gray-100 focus:bg-gray-100 focus:border-indigo-600"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-5 h-6 my-auto text-blue-600 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => console.log("TEST*****")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </form>
  );
};

export default SearchBar;
