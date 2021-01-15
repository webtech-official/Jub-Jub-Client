import React from "react";
const category = [
  { className: "all", filter: "" },
  { className: "return", filter: "반납" },
  { className: "noReturn", filter: "대여" },
  { className: "overdue", filter: "연체" },
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
              setOpen({ open: true, component: "a" });
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
