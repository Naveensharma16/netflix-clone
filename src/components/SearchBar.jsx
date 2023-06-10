import React from "react";
import search from "../assets/search.svg";

const SearchBar = () => {
  return (
    <>
      <div className="item-search-box">
        <div className="searchbox-container">
          <input type="text" placeholder="Search" />
          <button>
            <img src={search} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
