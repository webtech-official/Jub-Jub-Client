import styled from "@emotion/styled";

export const SearchBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  .searchArea {
    width: 80%;
    height: fit-content;
    display: flex;
    border-bottom: 3px solid #000000;
    .inputBox {
      padding: 16px;
      padding-left: 0px;
      width: 95%;
      height: 100%;
      border: 0;
      outline: 0ch;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0);
    }
    button{
      height: 50px;
      line-height: 50px;
    }
    img{
      height: 50px;
    }
  }
`;
