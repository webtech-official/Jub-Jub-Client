import React from "react";
import * as S from "./Styled";
import { logo, X } from "../../img/index";

const LoginRegister = ({ sideMark, children }) => {
  return (
    <S.ModalWrapper>
      <S.LeftContainer>
        <S.Logo src={logo} />
        <S.MarkBox>{sideMark}</S.MarkBox>
      </S.LeftContainer>
      <S.RightContainer>
        <S.XMarkContainer>
          <S.XMark src={X} />
        </S.XMarkContainer>
        {children}
      </S.RightContainer>
    </S.ModalWrapper>
  );
};

export default LoginRegister;