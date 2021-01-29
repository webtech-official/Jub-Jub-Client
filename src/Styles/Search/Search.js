import React from "react";
import { search_icon } from "../../img/index";
import * as S from "./Styled";

const Search = ({ search, onChange, size }) => {
  return (
    <S.SearchBox size={size}>
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
    </S.SearchBox>
  );
};

export default Search;
