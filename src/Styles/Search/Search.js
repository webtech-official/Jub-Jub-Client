import React from "react";
import { search_icon } from "../../img/index";
import * as S from "./Styled";

const Search = ({ search, onChange }) => {
  return (
    <S.SearchBox>
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
