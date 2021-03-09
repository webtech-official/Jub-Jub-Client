import React from "react";
import { useRecoilValue } from "recoil";
import { authStore } from "../../../Util/AuthStore/AuthStore";

const LookupItem = ({ itemInfo, history }) => {
  const { equ_Idx, content, name, count } = itemInfo;
  const userInfo = useRecoilValue(authStore)
  const {authorities} = userInfo;
  const handleDetailInfo = () => {
    if(authorities[0].authority === "ROLE_ADMIN") {
      alert("[관리자는 신청할 수 없습니다]")
    } else if(authorities[0].authority === "ROLE_USER") {
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
