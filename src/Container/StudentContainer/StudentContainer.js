import React from "react";
import { Student } from "../../Components";
import { Background } from "../../Styles";

const StudentContainer = ({ match }) => {
  return (
    <>
      <Student match={match} />
      <Background textHide={true} />
    </>
  );
};

export default StudentContainer;
