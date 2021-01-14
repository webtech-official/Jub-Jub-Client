import styled from "@emotion/styled";
const LookupWrapper = styled.div`
  position: absolute;
  width: 100%;
  min-width: 1440px;
  height: 950px;
  display: flex;
  align-items: center;
  top: 960px;
`;

const LookupContainer = styled.div`
  width: 1215px;
  height: 850px;
  margin: 0 auto;
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

export { LookupWrapper, LookupContainer, TitleBox };
