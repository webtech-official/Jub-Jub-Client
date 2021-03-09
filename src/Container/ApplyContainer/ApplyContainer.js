import React from "react";
import { Apply } from "../../Components";
import { Background } from "../../Styles/index";

const ApplyContainer = ({match}) => {
  return (
    <>
      <Apply match={match} />
      <Background textHide="true" />
    </>
  );
};

export default ApplyContainer;
