import React, { useState } from "react";
import { ItemPage, Modal, Search } from "../../../Styles";
import Loading from "../../Lookup/Loading/Loading";
import ItemInfo from "../ItemInfo/ItemInfo";
import { data } from "./dummy.json";
import * as S from "../Styled";

const EquipmentList = ({ setOpen }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(data);
  const equipmentList = items
    .filter((item, index) => items[index].name.includes(search))
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item) => (
      <ItemInfo itemInfo={item} key={item.id} setOpen={setOpen} />
    ));

  return (
    <>
      <S.AdminMainWrapper>
        <S.AdminMainContainer>
          <S.Top>
            <Search search={search} onChange={setSearch} />
            <S.AddBtn
              onClick={() => {
                setOpen({ open: true, component: "add" });
              }}
            >
              추가
            </S.AddBtn>
          </S.Top>
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
            {equipmentList.length === 0 ? <Loading /> : equipmentList}
          </ItemPage>
        </S.AdminMainContainer>
      </S.AdminMainWrapper>
    </>
  );
};

export default EquipmentList;
