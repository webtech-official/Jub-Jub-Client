import styled from "@emotion/styled";

export const AdminMainWrapper = styled.div`
  width: 1300px;
  height: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 30px;
`;

export const TitleBox = styled.div`
  width: 90%;
  height: 75px;
  background-color: #000000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: fit-content;
    display: flex;
    align-items: center;
  }
  span {
    font-size: 20px;
    color: #ffffff;
    text-align: center;
  }
  .itemNumber {
    width: 70px;
  }
  .category {
    width: 250px;
  }
  .itemName {
    width: 350px;
  }
  .itemAmount {
    width: 200px;
  }
  .btn {
    width: 200px;
  }
`;

export const AdminMainContainer = styled.div`
  width: 100%;
  height: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 30px;
  span {
    font-size: 20px;
    color: #ffffff;
    text-align: center;
  }
  .itemNumber {
    width: 70px;
  }
  .category {
    width: 250px;
  }
  .itemName {
    width: 350px;
  }
  .itemAmount {
    width: 200px;
  }
  .btn {
    width: 200px;
    display: flex;
    justify-content: space-around;
    .modify {
      font-weight: 100;
      color: black;
      font-size: 18px;
      width: 84px;
      padding: 10px 0;
      background: white;
      text-align: center;
      border: 1px black solid;
      border-radius: 10px;
    }
  }
`;

export const ModifyWrapper = styled.div`
  width: 800px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const ModifyContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const XContainer = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: flex-end;
`;

export const XMark = styled.img`
  cursor: pointer;
`;

export const ModifyContent = styled.div`
  margin: auto 50px;
  display: flex;
  justify-content: space-between;
  .nameBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 20px;
  }
`;

export const ModifyImg = styled.div`
  width: 200px;
  height: 200px;
`;

export const InputBox = styled.div`
  width: 350px;
  height: 200px;
  border-left: 1px solid #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  .inputBox {
    padding: 3px 0;
    border-bottom: 1px solid #000000;
    input {
      width: 300px;
      height: 20px;
      font-size: 20px;
      border: 0;
      outline: 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
`;

export const imgUpload = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
  label,
  input[type="submit"] {
    width: 135px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #000000;
    border-radius: 10px;
  }
`;

export const btnBox = styled.div`
  width: 35%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  span {
    width: 100px;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
  }
  .modifyBtn {
    background-color: #000000;
    color: #ffffff;
  }
  .deleteBtn {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000
  }
`;
