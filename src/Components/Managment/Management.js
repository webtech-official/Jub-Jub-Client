import React, { useState } from "react";
import { ItemPage } from "../../Styles";
import ItemRows from "./ItemRows";
import { student } from "./dummy.json";
import ItemInfo from "./ItemInfo";
import * as S from "./Styled";

const Management = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(student);
  const [search, setSearch] = useState("");
  return (
    <S.ManagementWrapper>
      <S.ManagementContainer>
        <ItemPage id={page} setId={setPage} length={items.length / 3 + 1}>
          <ItemRows page={page} />
        </ItemPage>
      </S.ManagementContainer>
    </S.ManagementWrapper>
  );
};

export default Management;
