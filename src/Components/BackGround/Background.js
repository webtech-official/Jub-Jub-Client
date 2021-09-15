import React from "react";
import styled from "@emotion/styled";
import { Ground, SnowGlobeDom, TextWrapper } from "./Styled";

const Background = ({ size, textHide }) => {
  const BackGroundWrapper = styled.div`
    position: relative;
    width: 100%;
    height: ${size}px;
    background-color: #000000;
    z-index: -1;
    @media screen and (max-width: 1540px){
      .textWrapper {
        left: 5%;
      }
      .snowGlobeDom {
          left: 960px;
      }
    }
  `;
  return (
    <BackGroundWrapper>
      {textHide === false ? (
        <TextWrapper className="textWrapper">
          <div className="firstRow">
            <span className="korText">학교에서 필요한것을 주워가세요!</span>
          </div>
          <div className="secondRow">
            <span className="korText">여러분의 보물창고</span>
            <span className="engText">JubJub</span>
          </div>
        </TextWrapper>
      ) : (
        null
      )}
      <SnowGlobeDom className="snowGlobeDom"/>
      <Ground />
    </BackGroundWrapper>
  );
};

Background.defaultProps = {
  size: 1100,
  textHide: false,
};

export default Background;
