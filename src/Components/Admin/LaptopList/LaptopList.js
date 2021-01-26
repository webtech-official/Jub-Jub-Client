import React, { useState } from "react";
import { ItemPage, Search } from "../../../Styles";
import Loading from "../../Lookup/Loading/Loading";
import ItemInfo from "../ItemInfo/ItemInfo";
import * as S from "../Styled";

const LaptopList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const LookupItemList = items
    .filter((item, index) => items[index].name.includes(search))
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item) => <ItemInfo itemInfo={item} key={item.id} />);
  return (
    <S.AdminMainWrapper>
      <Search search={search} onChange={setSearch} />
      <S.TitleBox>
        <div>
          <span className="itemNumber">번호</span>
          <span className="category">카테고리</span>
          <span className="itemName">품명</span>
          <span className="itemAmount">수량</span>
        </div>
      </S.TitleBox>
      <ItemPage id={page} setId={setPage} length={items.length}>
        {LookupItemList.length === 0 ? <Loading /> : LookupItemList}
      </ItemPage>
    </S.AdminMainWrapper>
  );
};

export default LaptopList;
