import React from "react";
import { data } from "./dummy.json";
import LookupItem from "./LookupItem/LookupItem";

const Lookup = () => {
  const LookupItemList = data.map((item) => <LookupItem itemInfo={item} />);
  return <>{LookupItemList}</>;
};

export default Lookup;
