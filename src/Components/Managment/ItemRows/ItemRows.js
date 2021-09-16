import React from "react";
import { auth_table } from "../../../data/auth_table.json";
import ItemInfo from "../ItemInfo/ItemInfo";
import * as S from "../Styled";

const ItemRows = ({ page, search }) => {
  const rows = auth_table
    .filter((item) => (item.classnum + item.name).toString().includes(search))
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
