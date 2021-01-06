import styled from "@emotion/styled";
import { left_arrow, right_arrow } from "../../img/index";

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
  .controlArea {
    width: 30%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    #left {
      background-image: url(${left_arrow});
    }
    #right {
      background-image: url(${right_arrow});
    }
    .selectedPage {
      font-weight: bold;
      text-shadow: 0px 0px 5px #ffffff;
    }
    .pageMoveButton {
      width: 24px;
      height: 24px;
      background-size: cover;
    }
    .pageNumber {
      width: 60%;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 24px;
      }
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
  .items{
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .itemBox {
    width: fit-content;
    height: 20%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #ffffff;
    span {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export { LookupWrapper, LookupContainer, TitleBox, ContentBox };
