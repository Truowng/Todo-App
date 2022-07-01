import React from "react";
import { set } from "react-hook-form";

const Search = ({ setSearchValueHandler, showSearchVisible }) => {
  return (
    <>
      <input
        onChange={(e) => setSearchValueHandler(e.target.value)}
        className="search-input"
        type="search"
        placeholder="Search"
      />
      {/* <button
        type="submit"
        className="search-btn todo-add-btn"
        onClick={() => {
          OnSearchTitleHander();
        }}
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button> */}
    </>
  );
};

export default Search;
