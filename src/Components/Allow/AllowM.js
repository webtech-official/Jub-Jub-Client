import React from "react";
import * as S from "./Styled";

const Check = ({state}) => {
    return (
        <S.ModalBack>
            <S.ModalContentWrapper>
                <S.ModalText>
                    { state } 하시겠습니까?
                </S.ModalText>
                <S.CheckBtn>
                확인
                </S.CheckBtn>
            </S.ModalContentWrapper>
        </S.ModalBack>
    )
}

export default Check;