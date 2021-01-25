import React from "react";
import { Mypage } from "../../Components";
import { Background } from "../../Styles/index";

const MyPageContainer = () => {
  return (
    <>
      <Mypage />
      <Background textHide={true} />
    </>
  );
};

export default MyPageContainer;
