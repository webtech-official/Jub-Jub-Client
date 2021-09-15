import React from 'react'
import { useHistory } from 'react-router-dom'
import Auth from '../../Assets/Api/Auth'
import { X } from '../../Img'
import * as S from './Styled'

const LogoutM = ({toggleModal}) => {
    const history = useHistory();
    const handleLogout = () => {
        history.push("/")
        Auth.logout().then(res => {
            console.log(res)
            if(res.data.code >= 0) {
                alert(res.data.msg);
                window.localStorage.clear();
                toggleModal(false)
                history.push("/")
            }
        })
    }
    return (
        <S.ModalBack>
            <S.ModalCloseBtnImageWrapper>
                <S.ModalCloseBtnImage src={X} alt="close_btn" onClick={toggleModal}/>
            </S.ModalCloseBtnImageWrapper>
            <S.ModalContentWrapper>
                <S.ModalText>
                    로그아웃 하시겠습니까?
                </S.ModalText>
                <S.CheckBtn onClick={handleLogout}>
                    확인
                </S.CheckBtn>
            </S.ModalContentWrapper>
        </S.ModalBack>
    )
}

export default LogoutM
