import React, { useState } from "react";
import { ItemPage } from "../../../Styles";
import { data } from "./dummy2.json";
import RentalCheck from "./RentalCheck";

const RentalList = () => {
  const [page, setPage] = useState(1);
  const [rental] = useState(data);
  const RentalList = rental
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item) => <RentalCheck itemInfo={item} key={item.id} />);
  return (
    <ItemPage id={page} setId={setPage} length={rental.length / 3 + 1}>
      {RentalList}
    </ItemPage>
  );
};

export default RentalList;
