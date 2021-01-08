import React from "react";
import { MainWrapper } from "./Styled";
import { Background } from "../../Styles/index";

const Main = ({ children }) => {
  return (
    <MainWrapper>
      {children}
      <Background textHide={true} />
    </MainWrapper>
  );
};

export default Main;
