import React from 'react'

const RentalCheck = ({itemInfo}) => {
    const { classNum, category, amount, name, rentDate, } = itemInfo || {};
    return (
      <>
        <div className="itemBox">
          <span className="classNum">{classNum}</span>
          <span className="category">{category}</span>
          <span className="name">{name}</span>
          <span className="amount">{amount}</span>
          <span className="rentDate">{rentDate}</span>
        </div>
      </>
    );
}

export default RentalCheck
