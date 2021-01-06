import React, { useState } from "react";

const Search = ({ search, onChange }) => {
  return (
    <>
      <div>
        <input
          className="searchArea"
          type="text"
          value={search}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <img></img>
      </div>
    </>
  );
};

export default Search;
