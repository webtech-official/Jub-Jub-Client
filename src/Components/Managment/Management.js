import React, { useState } from "react";
import { ItemPage } from "../../Styles";
import ItemRows from "./ItemRows";
import { student } from "./dummy.json";
import { data } from "./dummy2.json";
import * as S from "./Styled";
import RentalCheck from "./RentalCheck";

const Management = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(student);
  const [search, setSearch] = useState("");
  const [rental, setRental] = useState(data);
  const RentalList = rental
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item) => <RentalCheck itemInfo={item} key={item.id} />);
  return (
    <S.ManagementWrapper>
      <S.ManagementContainer>
        <ItemPage id={page} setId={setPage} length={rental.length}>
          <ItemRows page={page} />
        </ItemPage>
      </S.ManagementContainer>
      <S.ManagementContainer>
        <ItemPage id={page} setId={setPage} length={items.length / 3 + 1}>
          {RentalList}
        </ItemPage>
      </S.ManagementContainer>
    </S.ManagementWrapper>
  );
};

export default Management;
