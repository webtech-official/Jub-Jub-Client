import React from "react";
import { Lookup } from "../../Components";
import { LookupWrapper } from "../../Components/Lookup/Styled";
import { Background } from "../../Styles/index";

const HomeContainer = () => {
  return (
    <>
      <LookupWrapper>
        <Lookup />
      </LookupWrapper>
      <Background size={1950} />
    </>
  );
};

export default HomeContainer;
