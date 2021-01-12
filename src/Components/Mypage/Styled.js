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
  margin-right: 80px;
  width: 285px;
  height: 804px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .side {
    height: 100%;
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
      position: absolute;
      top: 80%;
      bottom: 0;
      font-size: 30px;
    }
  }
`;

const LookupContainer = styled.div`
  width: 1300px;
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
  .category {
    width: 200px;
  }
  .itemName {
    width: 250px;
  }
  .itemAmount {
    width: 220px;
  }
  .rentDate {
    width: 200px;
  }
  .btn {
    width: 220px;
  }
`;

const TitleBox = styled.div`
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

export { LookupWrapper, LookupSide, LookupContainer, TitleBox };
