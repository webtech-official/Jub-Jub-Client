import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./Styled";

const ItemInfo = ({ classnum, name }) => {
  const history = useHistory();
  const detailInfo = () => {
    history.push(`/Student/${classnum}`);
  };
  return (
    <S.ItemInfoWrapper to={`/Student/${classnum}`}>
      <span>
        {classnum} {name}
      </span>
    </S.ItemInfoWrapper>
  );
};

export default ItemInfo;
