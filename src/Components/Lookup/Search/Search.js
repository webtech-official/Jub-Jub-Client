import React, { useState } from "react";

const Search = () => {
  const [search, onChange] = useState("");
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </>
  );
};

export default Search;
