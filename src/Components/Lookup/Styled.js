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
  background-color: #ffffff;
  border-radius: 10px;
  .searchArea{
    width: 80%;
  }
`;

const TitleBox = styled.div`
  width: 90%;
  height: 75px;
  background-color: #000000;
  border-radius: 10px;
  display:flex;
  align-items: center;
  span {
    font-size: 20px;
    color: #ffffff
  }
  .itemNumber {
    padding: 0 70px;
  }
  .category {
    padding: 0 150px 0 70px;
  }
  .itemName {
    padding: 0 150px;
  }
  .itemAmount {
    padding: 0 150px 0 ;
  }
`;

export { LookupWrapper, LookupContainer, TitleBox };
