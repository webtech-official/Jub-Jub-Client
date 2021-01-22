import React from "react";

const LookupItem = ({ itemInfo, history }) => {
  const { id, category, name, amount } = itemInfo;
  const handleDetailInfo = () => {
    history.push(`/Apply/${id}`);
  };
  return (
    <>
      <div className="itemBox" onClick={handleDetailInfo}>
        <span className="itemNumber">{id}</span>
        <span className="category">{category}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{amount}</span>
      </div>
    </>
  );
};

export default LookupItem;
