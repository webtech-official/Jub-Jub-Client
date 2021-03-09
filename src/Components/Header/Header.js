import React, { useEffect, useState } from "react";
import { Login, Register } from "..";
import LogoutM from "./LogoutModal/LogoutM";
import { logo } from "../../img/index";
import { Modal } from "../../Styles";
import { ButtonWrapper, HeaderWrapper, Logo } from "./Styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authStore } from "../../Util/AuthStore/AuthStore";
import Buttons from "./Buttons/Buttons";
import Auth from "../../assets/Api/Auth";

const Header = () => {
  const [is_open, setOpen] = useState({
    open: false,
    component: null,
  });
  const userInfo = useRecoilValue(authStore)
  const setUserInfo = useSetRecoilState(authStore)
  const token = window.localStorage.getItem("jupjup_token");
  useEffect(()=> {
    if(token) {
      Auth.loadUserInfo().then((res) => {
      console.log(res)
      setUserInfo(res.data.data)
     })
    }
  }, [  setUserInfo])
  const {auth_Idx, classNumber, email, name, roles} = userInfo || {};
  console.log(roles, "asdasd")
  return (
    <>
      <HeaderWrapper>
        <Logo src={logo} />
        <ButtonWrapper admin={roles || ""}>
          <Buttons token={token} authority={roles || ""} setOpen={setOpen} />
        </ButtonWrapper>
      </HeaderWrapper>
      <Modal
        is_open={is_open.open}
        setOpen={() => {
          setOpen({ open: false });   
        }}
      >
        {is_open.component === "login" && <Login setOpen={setOpen} />}
        {is_open.component === "register" && <Register setOpen={setOpen} />}
        {is_open.component === "logout" && <LogoutM setOpen={setOpen} />}
      </Modal>
    </>
  );
};

export default Header;
