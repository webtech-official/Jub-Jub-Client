import React from "react";
import styled from "@emotion/styled";
import { Ground, SnowGlobeDom, TextWrapper } from "./Styled";

const Background = ({size}) => {
  const BackGroundWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 1440px;
  height: ${size}px;
  background-color: #000000;
`;
  return (
    <BackGroundWrapper>
      <TextWrapper>
        <div className="firstRow">
          <span className="korText">학교에서 필요한것을 주워가세요!</span>
        </div>
        <div className="secondRow">
          <span className="korText">여러분의 보물창고</span>
          <span className="engText">JubJub</span>
        </div>
      </TextWrapper>
      <SnowGlobeDom/>
      <Ground/> 
    </BackGroundWrapper>
  );
};

export default Background;
