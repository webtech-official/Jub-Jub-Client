import React, { useState } from "react";
import { ItemPage, Search } from "../../Styles";
import ItemRows from "./ItemRows/ItemRows";
import { auth_table } from "../../Data/auth_table.json";
import * as S from "./Styled";
import RentalList from "./Rental/RentalList/RentalList";

const Management = () => {
  const [page, setPage] = useState(1);
  const [items] = useState(auth_table);
  const [search, setSearch] = useState("");

  return (
    <S.ManagementWrapper>
      <S.ManagementContainer>
        <Search search={search} onChange={setSearch} />
        <ItemPage id={page} setId={setPage} length={items.length / 3 + 1}>
          <ItemRows page={page} search={search} />
        </ItemPage>
      </S.ManagementContainer>
      <S.ManagementContainer>
        <RentalList />
      </S.ManagementContainer>
    </S.ManagementWrapper>
  );
};

export default Management;
