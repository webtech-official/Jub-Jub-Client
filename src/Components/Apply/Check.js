import React from "react";
import { ModalBack, ModalContentWrapper, CheckBtn, ModalText } from "./Styled";

const Check = () => {
    return (
        <ModalBack>
            <ModalContentWrapper>
                <ModalText>
                태블릿, 모니터, 노트북은<br />
                하나만 대여 가능합니다!
                </ModalText>
                <CheckBtn>
                확인
                </CheckBtn>
            </ModalContentWrapper>
        </ModalBack>
    )
}

export default Check;