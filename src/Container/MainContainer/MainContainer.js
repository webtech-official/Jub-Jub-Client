import React from "react";
import { Lookup, Main } from "../../Components";
import { LookupWrapper } from "../../Components/Lookup/Styled";
import { Background } from "../../Styles";
import LookupContainer from "../LookupContainer/LookupContainer";

const MainContainer = () => {
  return (
    <>
      <Main>
        <Lookup />
      </Main>
    </>
  );
};

export default MainContainer;
