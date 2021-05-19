import styled from "@emotion/styled";

export const AllowWrapper = styled.div`
  position: absolute;
  width: 100%;
  min-width: 1440px;
  height: 987px;
  display: flex;
  align-items: center;
  z-index: 2;
  top: 100px;
`;

export const AllowBox = styled.div`
  width: 1883px;
  min-width: 1683px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllowContainer = styled.div`
  width: 1300px;
  min-width: 1300px;
  height: 804px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px;
  span {
    font-size: 20px;
    color: #ffffff;
    text-align: center;
  }
  .classNum {
    width: 200px;
  }
  .itemName {
    width: 250px;
  }
  .category {
    width: 250px;
  }
  .amount {
    width: 200px;
  }
  .btn {
    width: 220px;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    .Nobtn {
      font-weight:100;
      color: black;
      font-size: 18px;
      width: 84px;
      padding: 10px 0;
      background: white;
      text-align: center;
      border: 1px black solid;
      border-radius: 10px;
    }
    .Yesbtn {
      font-weight:100;
      color: white;
      font-size: 18px;
      width: 84px;
      padding: 10px 0;
      background: black;
      text-align: center;
      border: 1px white solid;
      border-radius: 10px;
    }
  }
`;

export const TitleBox = styled.div`
  margin: 45px 0 45px 0;
  width: 90%;
  height: 85px;
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
`;

export const ModalBack = styled.div`
    width: 600px;
    height: 400px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
`;

export const ModalContentWrapper = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    margin-top: 15%;
`;

export const ModalText = styled.div`
    height:50%;
    display: flex;
    align-items: center;
    color:black;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
`;

export const CheckBtn = styled.button`
    width: 100px;
    height: 65px;
    color: white;
    background-color: black;
    border-radius: 10px;
    text-align: center;
    font-size: 24px;
    margin-top: 40px;
    border: none;
    cursor:pointer;
`;
