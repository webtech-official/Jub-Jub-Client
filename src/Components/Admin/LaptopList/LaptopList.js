import React, { useState } from "react";
import { ItemPage, Search } from "../../../Styles";
import Loading from "../../Lookup/Loading/Loading";
import ItemInfo from "../ItemInfo/ItemInfo";
import { data } from "./dummy.json";
import * as S from "../Styled";

const LaptopList = ({ setOpen }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(data);
  const LookupItemList = items
    .filter((item, index) => items[index].name.includes(search))
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item) => (
      <ItemInfo itemInfo={item} key={item.id} setOpen={setOpen} />
    ));
  return (
    <S.AdminMainWrapper>
      <S.AdminMainContainer>
        <Search search={search} onChange={setSearch} />
        <S.TitleBox>
          <div>
            <span className="itemNumber">번호</span>
            <span className="category">카테고리</span>
            <span className="itemName">품명</span>
            <span className="itemAmount">수량</span>
            <span className="btn"></span>
          </div>
        </S.TitleBox>
        <ItemPage id={page} setId={setPage} length={items.length}>
          {LookupItemList.length === 0 ? <Loading /> : LookupItemList}
        </ItemPage>
      </S.AdminMainContainer>
    </S.AdminMainWrapper>
  );
};

export default LaptopList;
