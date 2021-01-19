import styled from "@emotion/styled";

export const MyWrapper = styled.div`
  position: absolute;
  min-width: 1440px;
  width: 100%;
  height: 1780px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  top: 113px;
`;

export const MyBox = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const MyContainer = styled.div`
  width: 1200px;
  min-width: 1300px;
  height: 1650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px;
  .name {
    font-size: 48px;
    align-self: start;
    margin: 50px 0 0 70px;
  }
  span {
    font-size: 20px;
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
  .graph {
    font-size: 40px;
    align-self: start;
    margin: 50px 0 0 70px;
    height: 1550px;
  }
`;

export const TitleBox = styled.div`
  margin: 45px 0 45px 0;
  width: 90%;
  height: 85px;
  background-color: #ffffff;
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
