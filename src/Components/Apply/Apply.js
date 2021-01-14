import React from "react";
import { 
  BackApply,
  MainBox,
  ContentBox,
  ApplyImg, 
  ApplyBox,
  HeadingTitle, 
  ApplySort, 
  BtnBox, 
  BtnI, 
  BtnSum,
  SubBtn,
} from "./Styled";

const Apply = () => {
  return (
    <BackApply>
      <MainBox>
        <ContentBox>
        <ApplyImg /*src={}*//>
          <ApplyBox>
            <HeadingTitle>test</HeadingTitle>
            <ApplySort>테스트</ApplySort>
            <BtnBox>
              <BtnI>–</BtnI>
              <BtnSum>1</BtnSum>
              <BtnI>+</BtnI>
            </BtnBox>
            <SubBtn>
              대여
            </SubBtn>
          </ApplyBox>
        </ContentBox>
      </MainBox>
    </BackApply>
  );
};

export default Apply;
