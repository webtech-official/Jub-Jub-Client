import React from "react";
import { student } from "./dummy.json";
import ItemInfo from "./ItemInfo";
import * as S from "./Styled";

const ItemRows = ({ page }) => {
  const rows = student
    .filter(
      (item, index) => index + 1 <= page * 15 && index + 1 > (page - 1) * 15
    )
    .map(({ classnum, name }, index) => {
      return (
        <>
          <ItemInfo classnum={classnum} name={name} key={classnum} />
        </>
      );
    });
  return <S.ItemRowsWrapper>{rows}</S.ItemRowsWrapper>;
};

export default ItemRows;
