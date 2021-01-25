import React, { useMemo, useState } from "react";
import { Login, Register } from "..";
import LogoutM from "./LogoutM";
import { logo } from "../../img/index";
import { Button, Modal } from "../../Styles";
import { ButtonWrapper, HeaderWrapper, Logo } from "./Styled";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [is_open, setOpen] = useState({
    open: false,
    component: null,
  });
  //const token = window.localStorage.getItem("token");
  const token = true;
  const history = useHistory();
  const changeRouterMypage = () => {
    history.push("/Mypage");
  };
  const HeaderMenu = useMemo(() => {
    return token ? (
      <>
        <span onClick={changeRouterMypage}>마이페이지</span>
        <Button
          backGroundColor="black"
          onClick={() => {
            setOpen({ open: true, component: "logout" });
          }}
        >
          로그아웃
        </Button>
      </>
    ) : (
      <>
        <Button
          backGroundColor="black"
          onClick={() => {
            setOpen({ open: true, component: "login" });
          }}
        >
          로그인
        </Button>
        <Button
          backGroundColor="black"
          onClick={() => {
            setOpen({ open: true, component: "register" });
          }}
        >
          회원가입
        </Button>
      </>
    );
  }, [token]);
  return (
    <>
      <HeaderWrapper>
        <Logo src={logo} />
        <ButtonWrapper>{HeaderMenu}</ButtonWrapper>
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
