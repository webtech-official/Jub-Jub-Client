import React, { useState } from "react";
import { data } from "./dummy.json";
import ItemPage from "./ItemPage/ItemPage";
import LookupItem from "./LookupItem/LookupItem";
import Search from "./Search/Search";
import { LookupWrapper, LookupContainer, TitleBox } from "./Styled";

const Lookup = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const LookupItemList = data
    .filter((item) => item.id <= page * 5 && item.id > (page - 1) * 5)
    .map((item) => <LookupItem itemInfo={item} />);
  return (
    <LookupWrapper>
      <LookupContainer>
        <Search search={search} onChange={setSearch} />
        <TitleBox>
          <span className="itemNumber">번호</span>
          <span className="category">카테고리</span>
          <span className="itemName">품명</span>
          <span className="itemAmount">수량</span>
        </TitleBox>
        {LookupItemList}
        <ItemPage id={page} setId={setPage} length={data.length} />
      </LookupContainer>
    </LookupWrapper>
  );
};

export default Lookup;
