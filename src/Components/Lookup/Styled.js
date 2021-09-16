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
  margin: 0 auto;
  width: calc(100vw - 20vw);
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
  .itemBox {
    cursor: pointer;
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

export const LookupItemTitleWrapper = styled.div``;

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
