import React from "react";

const ItemPage = ({ id, setId, length }) => {
  const page = [id, id + 1, id + 2, id + 3, id + 4];
  const pages = page.map((p) => (
    <span
      className={p === id ? `selectedPage` : ``}
      onClick={() => {
        setId(p);
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
            id >= 6 && setId(id - 5);
          }}
        ></div>
        <div className="pageNumber">{pages}</div>
        <div
          id="right"
          className="pageMoveButton"
          onClick={() => {
            if (length / 5 >= id) {
              setId(id + 5);
            }
          }}
        ></div>
      </div>
    </>
  );
};

export default ItemPage;
