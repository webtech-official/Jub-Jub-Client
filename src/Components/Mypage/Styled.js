import styled from "@emotion/styled";

const LookupWrapper = styled.div`
  position: absolute;
  width: 100%;
  min-width: 1440px;
  height: 900px;
  display: flex;
  justify-content: center;
  z-index: 2;
  top: 980px;
`;

const LookupSide = styled.div`
  width: 285px;
  height: 804px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .side {
    padding-top: 40px;
    font-size: 24px;
    .myEquipment {
      font-size: 36px;
      margin-bottom: 20px;
    }
    * {
      margin-bottom: 20px;
    }
    .changePass {
      font-size: 30px;
      align-self: end;
    }
  }
`;

const LookupContainer = styled.div`
  width: 1230px;
  height: 804px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 30px;
  .searchArea {
    width: 80%;
    height: fit-content;
    display: flex;
    border-bottom: 3px solid #000000;
    .inputBox {
      width: 95%;
      height: 100%;
      border: 0;
      outline: 0ch;
      font-size: 24px;
      background-color: rgba(0, 0, 0, 0);
    }
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
    width: 253px;
  }
  .itemName {
    width: 380px;
  }
  .itemAmount {
    width: 296px;
  }
`;

const TitleBox = styled.div`
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
`;

export { LookupWrapper, LookupSide, LookupContainer, TitleBox };
