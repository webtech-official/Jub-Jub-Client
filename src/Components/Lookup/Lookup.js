import React, { useState } from "react";
import * as S from "./Styled";
import { data } from "./dummy.json";
import Search from "./Search/Search";
import ItemPage from "../../Styles/ItemPage/ItemPage";
import LookupItem from "./LookupItem/LookupItem";
const Lookup = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(data);
  const LookupItemList = items
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item) => <LookupItem itemInfo={item} key={item.id} />);
  const handleSearch = (e) => {
    if (e.KeyCode === "Enter") {
      setItems(
        ...items,
        LookupItemList.filter((item, index) =>
          items[index].name.includes(search)
        )
      );
    }
  };
  return (
    <S.LookupContainer>
      <Search search={search} onChange={setSearch} onKeyPress={handleSearch} />
      <S.TitleBox>
        <div>
          <span className="itemNumber">번호</span>
          <span className="category">카테고리</span>
          <span className="itemName">품명</span>
          <span className="itemAmount">수량</span>
        </div>
      </S.TitleBox>
      <ItemPage id={page} setId={setPage} length={items.length}>
        {LookupItemList}
      </ItemPage>
    </S.LookupContainer>
  );
};

export default Lookup;
