import React from "react";
import { EquipmentState } from "../../../Styles";

const StudentItem = ({ itemInfo, allowInfo }) => {
  const { name, description } = itemInfo || {};
  const {amount, allow_at, status } = allowInfo || {};
  return (
    <>
      <div className="itemBox">
        <span className="category">{description}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{amount}</span>
        <span className="rentDate">{allow_at}</span>
        <span className="btn">
          <EquipmentState EqState={status} />
        </span>
      </div>
    </>
  );
};

export default StudentItem;
