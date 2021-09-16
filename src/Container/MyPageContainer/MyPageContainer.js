import React from "react";
import { MyPage } from "../../Components";
import { Background } from "../../Styles/index";

const MyPageContainer = () => {
  return (
    <>
      <MyPage />
      <Background textHide={true} />
    </>
  );
};

export default MyPageContainer;
