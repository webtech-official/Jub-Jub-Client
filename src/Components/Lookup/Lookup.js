import React, { useState } from "react";
import { data } from "./dummy.json";
import ItemPage from "./ItemPage/ItemPage";
import LookupItem from "./LookupItem/LookupItem";

const Lookup = () => {
  const [page, setPage] = useState(1);
  const LookupItemList = data
    .filter((item) => item.id <= page * 5 && item.id > (page - 1) * 5)
    .map((item) => <LookupItem itemInfo={item} />);
  return (
    <>
      <div>번호 | 카테고리 | 품명 | 수량</div>
      {LookupItemList}
      <ItemPage id={page} setId={setPage} length={data.length} />
    </>
  );
};

export default Lookup;
