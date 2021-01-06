import React from "react";

const ItemPage = ({ id, setId, length }) => {
  const page = [id, id + 1, id + 2, id + 3, id + 4];
  const pages = page.map((p) => (
    <span
      className={p === id ? `selectedPage` : ``}
      onClick={() => {
        if (p > parseInt(length / 5) + 1) {
          alert("더 이상 존재하지 않습니다.");
          setId(parseInt(length / 5) + 1);
        } else {
          setId(p);
        }
      }}
    >
      {p}
    </span>
  ));
  return (
    <>
      <div className="controlArea">
        <div
          id="left"
          className="pageMoveButton"
          onClick={() => {
            if (id >= 6) {
              setId(id - 5);
            } else {
              setId(1);
            }
          }}
        ></div>
        <div className="pageNumber">{pages}</div>
        <div
          id="right"
          className="pageMoveButton"
          onClick={() => {
            if (length / 5 >= id) {
              setId(id + 5);
            } else if (id + 5 > length / 5) {
              setId(parseInt(length / 5) + 1);
            }
          }}
        ></div>
      </div>
    </>
  );
};

export default ItemPage;
