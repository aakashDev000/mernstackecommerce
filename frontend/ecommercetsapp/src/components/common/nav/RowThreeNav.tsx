const RowThreeNav = () => {
  const textArray = [
    "Books",
    "Electronics",
    "Real-Estate",
    "Cars-Bikes",
    "Dorm-Furniture",
    "Men",
    "Women",
    "Music",
    "Hobbies Games",
    "Toys",
    "Kids",
  ];
  return (
    <>
      <div className="flex text-gray-700 mt-3 pl-28  space-x-6 text-xs">
        <div className="flex items-center">
          <select
            id="countries"
            className="text-gray-700 font-normal h-12 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>All Categories</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        {/* <div className="flex items-center">Books</div> */}

        {textArray.map((item, i) => {
          return (
            <div className="flex items-center" key={i}>
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RowThreeNav;
