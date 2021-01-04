import React from "react";
import * as S from "./Styled";

const Modal = ({ children, is_open, setOpen }) => {
  const ModalOpen = is_open && (
    <S.ModalWrapper
      onClick={() => {
        setOpen({ open: false, component: null });
      }}
    >
      {children}
    </S.ModalWrapper>
  );
  return <>{ModalOpen}</>;
};

export default Modal;
