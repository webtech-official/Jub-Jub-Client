import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ManagementWrapper = styled.div`
  position: absolute;
  top: 113px;
  width: 100%;
  min-width: 1870px;
  height: 2107px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
`;

export const ManagementContainer = styled.div`
  width: 1315px;
  height: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 30px;
  span {
    width : 220px;
    text-align:center;
  }
  /* .classNum{
    width: 100px;
  }
  .category{
    width: 250px;
  }
  .name{
    width: 350px;
  }
  .amount{
    width: 200px;
  }
  .rentDate{
    width: 200px;
  } */
`;

export const TitleBox = styled.div`
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
  span {
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    width : 220px;
`;

export const ItemInfoWrapper = styled(Link)`
  display: flex;

  border-radius: 8px;
  background-color: #ffffff;
  margin: 13px 32px;
  padding: 30px 50px;
  cursor: pointer;
  text-decoration: none;
  span {
    flex: 1;
    text-align: center;
    font-size: 22px;
    color: #000000;
  }
`;

export const ItemRowsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 115px);
  grid-template-columns: repeat(3, 360px);
`;
