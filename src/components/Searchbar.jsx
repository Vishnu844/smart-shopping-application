import { useRouter } from "next/navigation";
import React from "react";
import { GoSearch } from "react-icons/go";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/products?q=${searchQuery}`);
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSearch(e)}
        className="bg-gray-50 flex gap-3 items-center border border-gray-300 rounded-md p-2"
      >
        <GoSearch className="h-5 w-5 flex-none text-gray-300" />
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-50 outline-none placeholder-gray-400 text-gray-500 sm:w-auto"
          type="text"
          placeholder="Search"
        />
      </form>
    </>
  );
};

export default Searchbar;
