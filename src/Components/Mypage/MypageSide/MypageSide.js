import React from "react";

const MypageSide = () => {
  return (
    <>
      <div className="side">
        <div className="top">
          <div className="myEquipment">나의 기자재</div>
          <div className="all">전체</div>
          <div className="return">반납</div>
          <div className="noReturn">미반납</div>
          <div className="overdue">연체</div>
        </div>
        <div className="bottom">
          <div className="changePass">비밀번호 변경</div>
        </div>
      </div>
    </>
  );
};

export default MypageSide;
