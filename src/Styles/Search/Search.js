import React from "react";
import { search_icon } from "../../Img/index";
import * as S from "./Styled";

const Search = ({ search, onChange, size, standard, setStandard }) => {
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
        {standard === 'description' ? (
          <button className="standard" onClick={() => setStandard('name')}>카테고리 검색</button>
        ) : (
          <button className="standard" onClick={() => setStandard('description')}>품명 검색</button>
        )}
        <img src={search_icon} alt="search_icon"></img>
      </div>
    </S.SearchBox>
  );
};

export default Search;
