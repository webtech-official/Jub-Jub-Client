import React, { useState } from "react";
import * as S from "./Styled";
import { LoginRegister } from "../../Styles";

const PwChange = ({ setOpen }) => {
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [newPwCheck, setNewPwCheck] = useState("");
  return (
    <LoginRegister sideMark="&" setOpen={setOpen}>
      <S.TextBox>
        <div className="bigText">비밀번호 변경</div>
      </S.TextBox>
      <S.InputBox>
        <div className="inputRow">
          <input
            placeholder="Current Password"
            type="password"
            onChange={(e) => {
              setCurrentPw(e.target.value);
            }}
          />
        </div>
        <div className="newBox">
          <div className="inputRow">
            <input
              placeholder="New Password"
              type="password"
              onChange={(e) => {
                setNewPw(e.target.value);
              }}
            />
          </div>
          <div className="inputRow">
            <input
              placeholder="New Password Check"
              type="password"
              onChange={(e) => {
                setNewPwCheck(e.target.value);
              }}
            />
          </div>
        </div>
      </S.InputBox>
      <S.LoginButton>변경</S.LoginButton>
    </LoginRegister>
  );
};

export default PwChange;
