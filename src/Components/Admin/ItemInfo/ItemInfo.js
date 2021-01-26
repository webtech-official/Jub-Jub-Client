import React from "react";

const ItemInfo = ({ itemInfo }) => {
  const { id, category, name, amount } = itemInfo;
  return (
    <>
      <div className="itemBox">
        <span className="itemNumber">{id}</span>
        <span className="category">{category}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{amount}</span>
        <button>수정</button>
      </div>
    </>
  );
};

export default ItemInfo;
