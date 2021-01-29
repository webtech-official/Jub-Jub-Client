import React from "react";
import * as S from "./Styled";

const ItemPage = ({ id, setId, length, children, white }) => {
  const page = [id, id + 1, id + 2, id + 3, id + 4];
  const pages = page.map((p) => (
    <span
      key={p}
      className={p === id && `selectedPage`}
      onClick={() => {
        if (p > parseInt(length / 5) + 1) {
          alert("더 이상 존재하지 않습니다.");
          console.log(parseInt(length / 5) + 1);
          setId(parseInt(length / 5) + 1);
        } else {
          setId(p);
        }
      }}
    >
      {p}
    </span>
  ));

  if (white === true) {
    return (
      <S.ContentBox white>
        <div className="items">{children}</div>
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
              if (id + 5 >= parseInt(length / 5) + 1) {
                setId(parseInt(length / 5) + 1);
              } else {
                setId(id + 5);
              }
            }}
          ></div>
        </div>
      </S.ContentBox>
    );
  } else {
    return (
      <S.ContentBox>
        <div className="items">{children}</div>
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
              if (id + 5 >= parseInt(length / 5) + 1) {
                setId(parseInt(length / 5) + 1);
              } else {
                setId(id + 5);
              }
            }}
          ></div>
        </div>
      </S.ContentBox>
    );
  }
};

export default ItemPage;
