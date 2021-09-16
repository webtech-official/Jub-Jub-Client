import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authStore } from "../../../Util/AuthStore/AuthStore";

const LookupItem = ({ itemInfo, history }) => {
  const { equ_Idx, category, name, amount } = itemInfo;
  // const userInfo = useRecoilValue(authStore)
  // const { roles } = userInfo || {}
  const handleDetailInfo = () => {
    // if(roles) {
    //   history.push(`/Apply/${equ_Idx}`);
    // } else {
    //   alert("[로그인을 해야합니다]")
    //   console.log(userInfo)
    // }
    history.push(`/Apply/${equ_Idx}`)
  };
  return (
    <>
      <div className="itemBox" onClick={handleDetailInfo}>
        <span className="itemNumber">{equ_Idx}</span>
        <span className="category">{category}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{amount}</span>
      </div>
    </>
  );
};

export default LookupItem;
