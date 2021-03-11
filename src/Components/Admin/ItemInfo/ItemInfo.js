import React from "react";

const ItemInfo = ({ itemInfo, setOpen }) => {
  const { equ_Idx, content, name, count } = itemInfo;
  return (
    <>
      <div className="itemBox">
        <span className="itemNumber">{equ_Idx}</span>
        <span className="category">{content}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{count}</span>
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
