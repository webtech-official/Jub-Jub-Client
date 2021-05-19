import React, { useCallback, useEffect, useState } from "react";
import { Login, Register } from "..";
import LogoutModal from "../LogoutModal/LogoutModal";
import { logo } from "../../img/index";
import { ButtonWrapper, HeaderWrapper, Logo } from "./Styled";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { authStore } from "../../Util/AuthStore/AuthStore";
import Buttons from "./Buttons/Buttons";
import Auth from "../../assets/Api/Auth";
import useModal from "../../hooks/useModal";
import ModalPortal from "../ModalPortal/ModalPortal";
import { userInfoSelector } from "../../Util/AuthStore/AuthSelector";

const Header = () => {
  const [userInfo, setUserInfo] = useRecoilState(authStore)
  const loadUserInfo = useRecoilValue(userInfoSelector)
  const token = window.localStorage.getItem("jupjup_token");
  // useEffect(()=> {
  //   setUserInfo(loadUserInfo)
  // }, [setUserInfo, loadUserInfo])
  // console.log({}, "userInfo")
  //새로 작성한 리펙토링 코드 
  const {isShow, toggleModal} = useModal()
  const [modalName, setModalName] = useState("register")
  const {roles} = userInfo || ""
  return (
    <>
      <HeaderWrapper>
        <Logo src={logo} />
        <ButtonWrapper roles={roles}>
          <Buttons token={token} roles={roles} setModalName={setModalName} toggleModal={toggleModal}/>
        </ButtonWrapper>
      </HeaderWrapper>
      <ModalPortal isShow={isShow}>
        {modalName === "login" && <Login toggleModal={toggleModal} setModalName={setModalName} />}
        {modalName === "register" && <Register toggleModal={toggleModal} />}
        {modalName === "logout" && <LogoutModal toggleModal={toggleModal} />}
      </ModalPortal>
    </>
  );
};



export default Header;
