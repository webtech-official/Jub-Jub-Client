import React, { useMemo } from "react";
import { logo } from "../../img/imgExport";
import { Button } from "../../Styles";
import { ButtonWrapper, HeaderWrapper, Logo } from "./Styled";

const Header = () => {
  const token = window.localStorage.getItem("token");
  const HeaderMenu = useMemo(() => {
    return token ? (
      <>
        <button>마이페이지</button>
        <button>로그아웃</button>
      </>
    ) : (
      <>
        <Button backGroundColor="black">로그인</Button>
        <Button backGroundColor="black">회원가입</Button>
      </>
    );
  }, [token]);
  return (
    <HeaderWrapper>
      <Logo src={logo} />
      <ButtonWrapper>{HeaderMenu}</ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
