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
  width: 1215px;
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
  .standard {
    border: none;
    width: 15%;
    height: 45px;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
    background-color: #000000;
    border-radius: 10px;
    margin-right: 5px;
    &:active {
      transform: scale(0.9);
      box-shadow:  5px 5px 5px rgba(116, 125, 136, .5)
    }
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
