import React from "react";
import * as S from "../Styled";

const ItemInfo = ({ classnum, name }) => {
  return (
    <S.ItemInfoWrapper to={`/Student/${classnum}`}>
      <span>
        {classnum} {name}
      </span>
    </S.ItemInfoWrapper>
  );
};

export default ItemInfo;
