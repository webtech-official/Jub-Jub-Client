import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const EquipmentState = ({ EqState }) => {
  const [bgColor, setBgColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [borderState, setBorderState] = useState("0");
  useEffect(() => {
    switch (EqState) {
      case "대여":
        setBgColor("#ffffff");
        setFontColor("#000000");
        break;
      case "반납":
        setBgColor("#000000");
        setFontColor("#ffffff");
        setBorderState("1px solid #ffffff");
        break;
      case "연체":
        setBgColor("#FFE600");
        setFontColor("#000000");
        break;
      default:
        break;
    }
  }, [EqState]);
  const Box = styled.div`
    width: 99px;
    height: 63px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${bgColor};
    color: ${fontColor};
    border: ${borderState};
    border-radius: 10px;
  `;
  return <Box>{EqState}</Box>;
};

export default EquipmentState;
