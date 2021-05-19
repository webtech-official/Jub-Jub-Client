import React from "react";

const ItemInfo = ({ itemInfo, toggleModal, setModalName }) => {
  const { equ_Idx, description, name, amount } = itemInfo || {};
  return (
    <>
      <div className="itemBox">
        <span className="itemNumber">{equ_Idx}</span>
        <span className="category">{description}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{amount}</span>
        <span className="btn">
          <span
            className="modify"
            onClick={() => {
              toggleModal()
              setModalName("modify")
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
