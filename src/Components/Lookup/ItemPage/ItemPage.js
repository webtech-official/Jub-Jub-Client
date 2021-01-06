import React from "react";

const ItemPage = ({ id, setId, length }) => {
  const page = [id, id + 1, id + 2, id + 3, id + 4];
  const pages = page.map((p) => (
    <span
      onClick={() => {
        setId(p);
      }}
    >
      | {p} |
    </span>
  ));
  return (
    <>
      <div className="controlArea">
        <button
          onClick={() => {
            id !== 1 && setId(id - 1);
          }}
        >
          {"<"}
        </button>
        <div className="pageNumer">{pages}</div>
        <button
          onClick={() => {
            if (length / 5 >= id) {
              setId(id + 1);
            }
          }}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default ItemPage;
