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
  width: 100px;
  height: 100px;
  background-color: wheat;
`;
