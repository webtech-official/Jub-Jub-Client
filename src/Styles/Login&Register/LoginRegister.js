import React from "react";
import * as S from "./Styled";
import { logo, X } from "../../Img/index";

const LoginRegister = ({ sideMark, children, toggleModal }) => {
  return (
    <S.ModalWrapper>
      <S.LeftContainer>
        <S.Logo src={logo} />
        <S.MarkBox>{sideMark}</S.MarkBox>
      </S.LeftContainer>
      <S.RightContainer>
        <S.XMarkContainer>
          <S.XMark src={X} onClick={toggleModal} />
        </S.XMarkContainer>
        <S.ModalContentBox>{children}</S.ModalContentBox>
      </S.RightContainer>
    </S.ModalWrapper>
  );
};

export default LoginRegister;
