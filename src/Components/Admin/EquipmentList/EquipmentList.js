import React, { useState } from "react";
import { ItemPage, Search } from "../../../Styles";
import Loading from "../../Lookup/Loading/Loading";
import ItemInfo from "../ItemInfo/ItemInfo";
import { equipment_table } from "../../../Data/equipment_table.json";
import * as S from "../Styled";

const EquipmentList = ({ toggleModal, setModalName }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [equipmentList] = useState(equipment_table);

  const equipments = equipmentList
    .filter((_, index) => equipmentList[index].name.includes(search))
    .filter((_, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5)
    .map((item) => (
      <ItemInfo
        itemInfo={item}
        key={item.id}
        toggleModal={toggleModal}
        setModalName={setModalName}
      />
    ));

  return (
    <>
      <S.AdminMainWrapper>
        <S.AdminMainContainer>
          <S.Top>
            <Search search={search} onChange={setSearch} />
            <S.AddBtn
              onClick={() => {
                toggleModal();
                setModalName("add");
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
          <ItemPage id={page} setId={setPage} length={equipments.length}>
            {equipments.length === 0 ? <Loading /> : equipments}
          </ItemPage>
        </S.AdminMainContainer>
      </S.AdminMainWrapper>
    </>
  );
};

export default EquipmentList;
