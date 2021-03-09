import React from "react";
import * as S from "./Styled";
import { Lookup } from "../index";


const Main = () => {
  return (
    <S.MainWrapper>
      <S.MainLookupWrapper>
        <Lookup />  
      </S.MainLookupWrapper>
    </S.MainWrapper>
  );
};

export default Main;
