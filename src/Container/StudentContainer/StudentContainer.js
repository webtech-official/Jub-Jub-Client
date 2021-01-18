import React from "react";
import { Student } from "../../Components";
import { Background } from "../../Styles";

const StudentContainer = () => {
  return (
    <>
      <Student />
      <Background textHide={true} />
    </>
  );
};

export default StudentContainer;
