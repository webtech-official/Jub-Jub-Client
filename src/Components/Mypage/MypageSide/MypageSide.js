import React from "react";

const MypageSide = ({ statusFilter }) => {
  const handleFilter = (status) => {
    statusFilter(status);
  };
  return (
    <>
      <div className="side">
        <div className="top">
          <div className="myEquipment">나의 기자재</div>
          <div
            className="all"
            onClick={() => {
              handleFilter("");
            }}
          >
            전체
          </div>
          <div
            className="return"
            onClick={() => {
              handleFilter("반납");
            }}
          >
            반납
          </div>
          <div
            className="noReturn"
            onClick={() => {
              handleFilter("대여");
            }}
          >
            대여
          </div>
          <div
            className="overdue"
            onClick={() => {
              handleFilter("연체");
            }}
          >
            연체
          </div>
        </div>
        <div className="bottom">
          <div className="changePass">비밀번호 변경</div>
        </div>
      </div>
    </>
  );
};

export default MypageSide;
