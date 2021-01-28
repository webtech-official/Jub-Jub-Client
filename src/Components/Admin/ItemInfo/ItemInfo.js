import React from "react";

const ItemInfo = ({ itemInfo, setOpen }) => {
  const { id, category, name, amount } = itemInfo;
  return (
    <>
      <div className="itemBox">
        <span className="itemNumber">{id}</span>
        <span className="category">{category}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{amount}</span>
        <span className="btn">
          <span
            className="modify"
            onClick={() => {
              setOpen({ open: true, component: "modify" });
            }}
          >
            수정
          </span>
        </span>
      </div>
    </>
  );
};

export default ItemInfo;
