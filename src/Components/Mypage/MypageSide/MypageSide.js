import React from "react";

const category = [
  { className: "all", filter: "" },
  { className: "wait", filter: "대기" },
  { className: "rental", filter: "대여" },
  { className: "accept", filter: "승인" },
  { className: "reject", filter: "거절" },
];
const MypageSide = ({ statusFilter, setPage, setOpen }) => {
  const handleFilter = (status) => {
    statusFilter(status);
  };
  const categories = category.map((item) => (
    <div
      className={item.className}
      onClick={() => {
        handleFilter(item.filter);
        setPage(1);
      }}
    >
      {item.filter === "" ? "전체" : item.filter}
    </div>
  ));
  return (
    <>
      <div className="side">
        <div className="top">
          <div className="myEquipment">나의 기자재</div>
          {categories}
        </div>
        <div className="bottom">
          <div
            className="changePass"
            onClick={() => {
              setOpen({ open: true, component: "pwChange" });
            }}
          >
            비밀번호 변경
          </div>
        </div>
      </div>
    </>
  );
};

export default MypageSide;
