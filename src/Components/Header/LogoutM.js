import React from 'react'
import { useHistory } from 'react-router-dom'
import Auth from '../../assets/Api/Auth'
import { X } from '../../img'
import * as S from './Styled'

const LogoutM = ({setOpen}) => {
    const history = useHistory();
    const handleLogout = () => {
        Auth.logout().then(res => {
            if(res.data.code >= 0) {
                alert(res.data.msg);
                window.localStorage.clear();
                setOpen(false)
                history.push("/")
            }
        })
    }
    return (
        <S.ModalBack>
            <div>
                <S.ModalCloseBtnImage src={X} alt="close_btn" onClick={() => setOpen(false)}/>
            </div>                
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
