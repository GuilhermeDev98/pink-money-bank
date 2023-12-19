import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex w-full">
      <div className="rotate-90 text-2xl text-gray-400"><CiSearch /></div>
      <input type="text" className="w-full placeholder:text-gray-400 placeholder:font-light mx-2 px-2 focus:outline-none" placeholder="Pesquisar na conta"/>
    </div>
  );
};

export default SearchBar;
