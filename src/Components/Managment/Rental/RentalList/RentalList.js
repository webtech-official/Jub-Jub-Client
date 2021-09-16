import React, { useState } from "react";
import * as S from "../../Styled";
import { ItemPage, Search } from "../../../../Styles";
import { equipment_allow_table } from "../../../../data/equipment_allow_table.json";
import RentalListItem from "../RentalListItem/RentalListItem";

const RentalList = () => {
  const [page, setPage] = useState(1);
  const [rental] = useState(equipment_allow_table);
  const [search, setSearch] = useState("");
  const RentalList = rental
    .filter((item) => item.status === 2)
    .filter(item => item.equ_Idx)
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item) => <RentalListItem itemInfo={item} key={item.id} />);
  return (
    <>
      <S.ManagementContainer>
            <Search search={search} onChange={setSearch} />
        <S.TitleBox>
          <span className="classNum">학번</span>
          <span className="category">카테고리</span>
          <span className="name">품명</span>
          <span className="amount">수량</span>
          <span className="rentDate">대여일</span>
        </S.TitleBox>
        <ItemPage id={page} setId={setPage} length={rental.length / 3 + 1}>
          {RentalList}
        </ItemPage>
      </S.ManagementContainer>
    </>
  );
};

export default RentalList;
