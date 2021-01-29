import styled from "@emotion/styled";

export const TextBox = styled.div`
  .bigText {
    font-size: 36px;
    font-weight: bold;
    padding: 10px;
    font-family: Roboto;
  }
  .goRegister {
    font-size: 16px;
    padding: 10px;
    .registerKorText {
      color: #3d9cff;
    }
  }
`;

export const InputBox = styled.div`
  height: 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 10px;
  .inputRow {
    width: 70%;
    border-bottom: 1px solid #898989;
    display: flex;
    padding: 5px 0;
    input {
      width: 100%;
      border: 0;
      font-size: 20px;
      padding: 0;
      outline: 0ch;
    }
  }
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 53px;
  border-radius: 10px;
  border: 0;
  background-color: black;
  color: #ffffff;
  font-size: 20px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  outline:0;
`;
