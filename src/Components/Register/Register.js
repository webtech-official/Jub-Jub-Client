import React, { useState } from "react";
import * as S from "./Styled";
import { LoginRegister } from "../../Styles";

const Register = ({ setOpen }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [pwcheck, setPwcheck] = useState("");
  const [name, setName] = useState("");
  const [classNumer, setClassNumer] = useState("");
  return (
    <LoginRegister sideMark="!" setOpen={setOpen}>
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
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="inputRow">
          <input
            placeholder="Password Check"
            type="text"
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
            type="text"
            onChange={(e) => {
              setClassNumer(e.target.value);
            }}
          />
        </div>
      </S.InputBox>
      <S.RegisterButton>회원가입</S.RegisterButton>
    </LoginRegister>
  );
};

export default Register;
