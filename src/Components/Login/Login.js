import React, { useState } from "react";
import * as S from "./Styled";
import { logo, X } from "../../img/index";
import { LoginRegister } from "../../Styles";

const Login = ({ setOpen }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LoginRegister sideMark="?" setOpen={setOpen}>
      <S.LoginContentBox>
        <S.TextBox>
          <div className="bigText">Log In</div>
          <div className="goRegister">
            가입하고 대여하기.
            <span className="registerKorText">회원가입</span>
          </div>
        </S.TextBox>
        <S.InputBox>
          <div className="inputRow">
            <input
              placeholder="Email"
              type="text"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
          <div className="inputRow">
            <input
              placeholder="Password"
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </S.InputBox>
        <S.LoginButton>로그인</S.LoginButton>
      </S.LoginContentBox>
    </LoginRegister>
  );
};

export default Login;
