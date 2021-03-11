import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authStore } from "../../../Util/AuthStore/AuthStore";

const LookupItem = ({ itemInfo, history }) => {
  const { equ_Idx, content, name, count } = itemInfo;
  const userInfo = useRecoilValue(authStore)
  const { roles } = userInfo || {}
  const handleDetailInfo = () => {
    console.log(roles[0], "lookupitem roles")
    if(roles) {
      history.push(`/Apply/${equ_Idx}`);
    } else {
      alert("[로그인을 해야합니다]")
      console.log(userInfo)
    }
  };
  return (
    <>
      <div className="itemBox" onClick={handleDetailInfo}>
        <span className="itemNumber">{equ_Idx}</span>
        <span className="category">{content}</span>
        <span className="itemName">{name}</span>
        <span className="itemAmount">{count}</span>
      </div>
    </>
  );
};

export default LookupItem;
