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

const LookupContainer = styled.div`
  width: 1380px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 10px;
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
    width: 100px;
  }
  .category {
    width: 273px;
  }
  .itemName {
    width: 420px;
  }
  .itemAmount {
    width: 336px;
  }
  .controlArea{
    width: 40%;
    height: 16%;
    display:flex;
    align-items: center;
    button{
      
    }
    .pageNumer{

    }
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

const ContentBox = styled.div`
  width: 90%;
  height: 70%;
  color: white;
  background-color: #000000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .itemBox {
    width: fit-content;
    height: 16%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #ffffff;
    span{
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export { LookupWrapper, LookupContainer, TitleBox, ContentBox };
