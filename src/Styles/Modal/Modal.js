import React from "react";
import * as S from "./Styled";

const Modal = ({ children, is_open, setOpen }) => {
  const ModalOpen = is_open && (
    <>
      <S.ModalWrapper
        onClick={() => {
          setOpen({ open: false, component: null });
        }}
      >
        <S.ModalContentWrapper>{children}</S.ModalContentWrapper>
      </S.ModalWrapper>
    </>
  );
  return <>{ModalOpen}</>;
};

export default Modal;
