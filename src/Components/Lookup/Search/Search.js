import React, { useState } from "react";
import { search_icon } from "../../../img/index";

const Search = () => {
  const [search, onChange] = useState("");
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
        <img src={search_icon}></img>
      </div>
    </>
  );
};

export default Search;
