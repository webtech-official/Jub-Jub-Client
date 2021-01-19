import React, { useState } from "react";
import { Modal } from '../../../Styles';
import AllowM from '../AllowM';

const AllowItem = ({ itemInfo }) => {
  const { classNum, category, name, amount } = itemInfo || {};
  let [as, setAs] = useState("");
  const [is_open, setOpen] = useState({
    open: false,
    component: null,
  });
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
              setAs(as = "수락")
              setOpen({open: true, component:"AllowM"})
            }}
          >수락</span>
          <span className="Nobtn"
            onClick={() => {
              setAs(as = "거절")
              setOpen({open: true, component:"AllowM"})
            }}
          >거절</span>
        </span>
      </div>
      <Modal
          is_open={is_open.open}
          setOpen={() => {setOpen({open: false})}}
        >
          {is_open.component === "AllowM" && <AllowM state={ as }/>}
      </Modal>
    </>
  );
};

export default AllowItem;