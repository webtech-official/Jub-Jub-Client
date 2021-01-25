import React from 'react'
import * as S from './Styled'

const LogoutM = () => {
    return (
        <S.ModalBack>
            <S.ModalContentWrapper>
                <S.ModalText>
                    로그아웃 하시겠습니까?
                </S.ModalText>
                <S.CheckBtn>
                확인
                </S.CheckBtn>
            </S.ModalContentWrapper>
        </S.ModalBack>
    )
}

export default LogoutM
