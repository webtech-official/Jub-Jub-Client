import React, { useState } from "react";
import { Modal } from '../../../Styles';


const AllowItem = ({ itemInfo, setOpen }) => {
  const { classNum, category, name, amount } = itemInfo || {};
  return (
    <>
      <div className="itemBox">
        <span className="category">{classNum}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{category}</span>
        <span className="rentDate">{amount}</span>
        <span className="btn">
          <span className="Yesbtn" 
            onClick={() => {
              setOpen({open: true, component:"AllowM", state:"수락"})
            }}
          >수락</span>
          <span className="Nobtn"
            onClick={() => {
              setOpen({open: true, component:"AllowM", state:"거절"})
            }}
          >거절</span>
        </span>
      </div>
    </>
  );
};

export default AllowItem;