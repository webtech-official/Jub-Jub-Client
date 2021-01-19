import styled from "@emotion/styled";

export const MyWrapper = styled.div`
  position: absolute;
  width: 100%;
  min-width: 1440px;
  height: 987px;
  display: flex;
  align-items: center;
  z-index: 2;
  top: 113px;
`;

export const MyBox = styled.div`
  width: 1683px;
  min-width: 1683px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const MySide = styled.div`
  width: 285px;
  min-width: 285px;
  height: 804px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  .side {
    height: 90%;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    .top {
      div{
        cursor:pointer;
      }
      .myEquipment {
        font-size: 36px;
        margin-bottom: 20px;
      }
      * {
        margin-bottom: 20px;
      }
    }
    .bottom {
      .changePass {
        font-size: 30px;
        cursor:pointer;
      }
    }
  }
`;

export const MyContainer = styled.div`
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
    display: flex;
    justify-content: center;
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
