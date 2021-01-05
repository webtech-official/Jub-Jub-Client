import React from "react";
import { BackGroundWrapper, Ground, SnowGlobeDom, TextWrapper } from "./Styled";

const Background = () => {
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
