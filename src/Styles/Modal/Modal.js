import React from "react";
import { useState } from "react";
import * as S from "./Styled";

const Modal = ({ children }) => {
  const [is_open, setOpen] = useState(false);
  const ModalOpen = is_open && (
    <S.ModalWrapper
      onClick={() => {
        setOpen(false);
      }}
    >
      {children}
    </S.ModalWrapper>
  );
  return <>{ModalOpen}</>;
};

export default Modal;
