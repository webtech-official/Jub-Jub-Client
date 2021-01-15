import React from "react";
import { EquipmentState } from "../../../Styles";

const MypageItem = ({ itemInfo }) => {
  const { category, name, amount, rentDate, state } = itemInfo || {};
  return (
    <>
      <div className="itemBox">
        <span className="category">{category}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{amount}</span>
        <span className="rentDate">{rentDate}</span>
        <span className="btn">
          <EquipmentState EqState={state}/>
        </span>
      </div>
    </>
  );
};

export default MypageItem;
