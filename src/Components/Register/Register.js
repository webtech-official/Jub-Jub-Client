import React, { useState } from "react";
import * as S from "./Styled";
import { LoginRegister } from "../../Styles";
import Auth from "../../Assets/Api/Auth";

const Register = ({ toggleModal }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [pwcheck, setPwcheck] = useState("");
  const [name, setName] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const logged = () => {
    localStorage.setItem('jupjup_token', 'dummy');
  }
  const handleRegister = () => {
    if (password === pwcheck) {
      // Auth.signup(classNumber, id, name, password).then((res) => {
      //   const { msg } = res.Data;
      //   alert(msg);
      //   setOpen({ open: false });
      // });
      toggleModal()
    } else {
      alert("패스워드가 다릅니다");
    }
  };
  return (
    <LoginRegister sideMark="!" toggleModal={toggleModal}>
      <S.TextBox>
        <div className="bigText">Register</div>
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
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="inputRow">
          <input
            placeholder="Password Check"
            type="password"
            onChange={(e) => {
              setPwcheck(e.target.value);
            }}
          />
        </div>
        <div className="inputRow">
          <input
            placeholder="Name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="inputRow">
          <input
            placeholder="Class Number (ex 1101)"
            type="number"
            onChange={(e) => {
              setClassNumber(e.target.value);
            }}
          />
        </div>
      </S.InputBox>
      <S.RegisterButton onClick={() => {
        handleRegister()
        logged()
      }}>회원가입</S.RegisterButton>
    </LoginRegister>
  );
};

export default Register;
