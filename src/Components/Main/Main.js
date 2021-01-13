import React from "react";
import { MainWrapper } from "./Styled";
import { Lookup } from "../index";
import styled from "@emotion/styled";

const MainLookupWrapper = styled.div`
  position: absolute;
  width: 100%;
  min-width: 1440px;
  height: 987px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = () => {
  return (
    <MainWrapper>
      <MainLookupWrapper>
        <Lookup />
      </MainLookupWrapper>
    </MainWrapper>
  );
};

export default Main;
