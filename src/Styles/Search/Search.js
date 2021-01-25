import React from "react";
import { search_icon } from "../../img/index";

const Search = ({ search, onChange }) => {
  return (
    <>
      <div className="searchArea">
        <input
          className="inputBox"
          type="text"
          value={search}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <img src={search_icon} alt="search_icon"></img>
      </div>
    </>
  );
};

export default Search;
