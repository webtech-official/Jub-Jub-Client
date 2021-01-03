import React from "react";

const LookupItem = ({ itemInfo }) => {
  const { id, category, name, amount } = itemInfo;
  return (
    <>
      <div>
        {id} | {category} | {name} | {amount}
      </div>
    </>
  );
};

export default LookupItem;
