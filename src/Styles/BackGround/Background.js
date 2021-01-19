import React from "react";
import styled from "@emotion/styled";
import { Ground, SnowContainer, SnowGlobeDom, TextWrapper, Text } from "./Styled";

const BakcgroundContainer = styled.div`
  width: 100%;
  height: 90%;
`

const Background = ({ size, textHide }) => {
  const BackGroundWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #000000;
    z-index: -1;
  `;
  return (
    <BakcgroundContainer>
      <BackGroundWrapper>
        {textHide === false ? (
          <TextWrapper>
            <Text>
              <div className="firstRow">
                <span className="korText">학교에서 필요한것을 주워가세요!</span>
              </div>
              <div className="secondRow">
                <span className="korText">여러분의 보물창고</span>
              </div>
              <div>
                <span className="engText">JubJub</span>
              </div>
            </Text>
          </TextWrapper>
        ) : (
          ""
        )}
        <SnowContainer>
          <SnowGlobeDom />
        </SnowContainer>
        <Ground />
      </BackGroundWrapper>
    </BakcgroundContainer>
  );
};

Background.defaultProps = {
  textHide: false,
};

export default Background;
