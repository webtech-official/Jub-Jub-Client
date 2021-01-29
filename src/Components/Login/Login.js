import React, { useState } from "react";
import * as S from "./Styled";
import { LoginRegister } from "../../Styles";
import Auth from "../../assets/Api/Auth";
import { useHistory } from "react-router-dom";

const Login = ({ setOpen }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = () => {
    console.log(Auth.login(id, password));
    Auth.login(id, password)
      .then((res) => {
        const { code, data, msg } = res.data;
        console.log(code);
        alert(msg);
        setOpen({ open: false });
        if (code >= 0) {
          window.localStorage.setItem("token", data);
          history.push("/Main");
        }
      })
      .catch((err) => console.log(err));
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  return (
    <LoginRegister sideMark="?" setOpen={setOpen}>
      <S.TextBox>
        <div className="bigText">Log In</div>
        <div className="goRegister">
          가입하고 대여하기.
          <span className="registerKorText">회원가입</span>
        </div>
      </S.TextBox>
      <S.InputBox>
        <div className="inputRow">
          <input placeholder="Email" type="text" onChange={onChangeId} />
        </div>
        <div className="inputRow">
          <input
            type="password"
            placeholder="Password"
            onChange={onChangePassword}
          />
        </div>
      </S.InputBox>
      <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
    </LoginRegister>
  );
};

export default Login;
