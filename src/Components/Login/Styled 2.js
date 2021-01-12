import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  width: 900px;
  height: 600px;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: #282828;
  border-radius: 10px 0px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const RightContainer = styled.div`
  width: 600px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img``;

export const QuestionMark = styled.div`
  font-size: 344px;
  line-height: 374px;
  text-align: center;
  color: #ffffff;
  transform: rotate(-15deg);
`;

export const XMarkContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const XMark = styled.img``;

export const LoginContentBox = styled.div`
  height: 80%;
  margin: auto 40px;
`;

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
`;
