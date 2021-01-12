import React from "react";

const MypageItem = ({ itemInfo }) => {
  const { category, name, amount, rentDate } = itemInfo || {};
  return (
    <>
      <div className="itemBox">
        <span className="category">{category}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{amount}</span>
        <span className="rentDate">{rentDate}</span>
        <span className="btn"></span>
      </div>
    </>
  );
};

export default MypageItem;
