import React from "react";

const AllowItem = ({ itemInfo, toggleModal, setAllow }) => {
  const { classNum, category, name, amount } = itemInfo || {};
  return (
    <>
      <div className="itemBox">
        <span className="classNum">{classNum}</span>
        <span className="category">{category}</span>
        <span className="itemName">{name}</span>
        <span className="amount">{amount}</span>
        <span className="btn">
          <span
            className="Yesbtn"
            onClick={() => {
              toggleModal();
              setAllow(true)
            }}
          >
            수락
          </span>
          <span
            className="Nobtn"
            onClick={() => {
              toggleModal()
              setAllow(false)
            }}
          >
            거절
          </span>
        </span>
      </div>
    </>
  );
};

export default AllowItem;
