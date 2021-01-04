import React, { useMemo } from "react";
import { HeaderWrpper } from "./Styled";

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
        <button>로그인</button>
        <button>회원가입</button>
      </>
    );
  }, [token]);
  return (
    <HeaderWrpper>
      <div>
        <img alt="logo" />
      </div>
      <div>{HeaderMenu}</div>
    </HeaderWrpper>
  );
};

export default Header;
