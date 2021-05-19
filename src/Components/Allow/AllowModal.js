import React from "react";
import * as S from "./Styled";

const AllowModal = ({isAllow, toggleModal}) => {
    return (
        <S.ModalBack>
            <S.ModalContentWrapper>
                <S.ModalText>
                    { isAllow ? "수락" : "거절" } 하시겠습니까?
                </S.ModalText>
                <S.CheckBtn onClick={toggleModal}>
                확인
                </S.CheckBtn>
            </S.ModalContentWrapper>
        </S.ModalBack>
    )
}

export default AllowModal;