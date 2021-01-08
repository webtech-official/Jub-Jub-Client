import React, { useMemo, useState } from "react";
import { Login, Register } from "..";
import { logo } from "../../img/index";
import { Button, Modal } from "../../Styles";
import { ButtonWrapper, HeaderWrapper, Logo } from "./Styled";

const Header = () => {
  const [is_open, setOpen] = useState({
    open: false,
    component: null,
  });
  const token = window.localStorage.getItem("token");
  const HeaderMenu = useMemo(() => {
    return token ? (
      <>
        <button>마이페이지</button>
        <button>로그아웃</button>
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
    <HeaderWrapper>
      <Logo src={logo} />
      <ButtonWrapper>{HeaderMenu}</ButtonWrapper>
      <Modal
        is_open={is_open.open}
        setOpen={() => {
          setOpen({ open: false });
        }}
      >
        {is_open.component === "login" && <Login />}
        {is_open.component === "register" && <Register />}
      </Modal>
    </HeaderWrapper>
  );
};

export default Header;
