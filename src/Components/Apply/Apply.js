import React from "react";
import { BackApply,MainBox,ContentBox,ApplyImg, ApplyBox, HeadingTitle, ApplySort } from "./Styled";

const Apply = () => {
  return (
    <BackApply>
      <MainBox>
        <ContentBox>
          <ApplyBox>
            <ApplyImg />
            <HeadingTitle>test</HeadingTitle>
            <ApplySort>테스트</ApplySort>
          </ApplyBox>
        </ContentBox>
      </MainBox>
    </BackApply>
  );
};

export default Apply;
