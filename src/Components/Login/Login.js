import React, { useCallback, useState } from "react";
import * as S from "./Styled";
import { LoginRegister } from "../../Styles";
import Auth from "../../assets/Api/Auth";
import { useHistory } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authStore } from "../../Util/AuthStore/AuthStore";
import { loginSelector } from "../../Util/AuthStore/AuthSelector";

const Login = ({ toggleModal , setModalName}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(authStore)

  const history = useHistory();
  const handleLogin = () => {
    Auth.login(email, password)
      .then((res) => {
        const { code, data, msg } = res.data;
        console.log(data);
        alert(msg);
        toggleModal()
        if (code >= 0) {
          console.log(res.data)
          const {authority, classNum, email, name} = res.data.data;
          setUserInfo({authority, classNum, email, name})
          window.localStorage.setItem("jupjup_token", data.accessToken);
          history.push("/Main");
        }
      })
      .catch((err) => console.log(err));
    toggleModal()
    history.push('/Main')
  }; 
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  },[]);
  const onChangeId = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const renderRegisterModal = () => {
    setModalName("register")
  }
  return (
    <LoginRegister sideMark="?" toggleModal={toggleModal}>
      <S.TextBox>
        <div className="bigText">Log In</div>
        <div className="goRegister" onClick={renderRegisterModal}>
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
