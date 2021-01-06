import React, { useState } from "react";
import { search_icon } from "../../../img/index";

const Search = ({ search, onChange, onKeyPress }) => {
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
          onKeyPress={onKeyPress}
        />
        <img src={search_icon}></img>
      </div>
    </>
  );
};

export default Search;
