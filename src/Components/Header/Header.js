import React, { useMemo } from "react";
import {logo} from "../../img/imgExport"

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
    <div>
      <div>
        <img alt="logo" src={logo}/>
      </div>
      <div>{HeaderMenu}</div>
    </div>
  );
};

export default Header;
