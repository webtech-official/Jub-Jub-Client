import React, { useEffect, useState } from "react";
import * as S from "./Styled";
import { equipment_table } from "../../Data/equipment_table.json";
import ItemPage from "../../Styles/ItemPage/ItemPage";
import { Search } from "../../Styles/index";
import LookupItem from "./LookupItem/LookupItem";
import Loading from "./Loading/Loading";
import { useHistory } from "react-router-dom";
import Admin from "../../Assets/Api/Admin";
import { useRecoilState } from "recoil";
import { equipmentListState } from "../../Util/AdminStore/AdminStore"

const Lookup = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [equipmentList, setEquipmentList] = useState(equipment_table)
  // useEffect(() => { 
  //   Admin.equipmentInfoAll().then(res => {
  //     console.log(res)
  //     setEquipmentList(res.data.list)
  //   })
  // }, [setEquipmentList])
  console.log(equipmentList, "asd")
  const history = useHistory();
  const LookupItemList = equipmentList
    .filter((item, index) => equipmentList[index].name.includes(search))
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item) => (
      <LookupItem itemInfo={item} key={item.equ_Idx} history={history} />
    ));
  console.log(equipmentList)
  return (
    <S.LookupContainer>
      <Search search={search} onChange={setSearch} />
      <S.TitleBox>
        <div>
          <span className="itemNumber">번호</span>
          <span className="category">카테고리</span>
          <span className="itemName">품명</span>
          <span className="itemAmount">수량</span>
        </div>
      </S.TitleBox>
      <ItemPage id={page} setId={setPage} length={equipmentList.length}>
        {LookupItemList.length === 0 ? <Loading /> : LookupItemList}
      </ItemPage>
    </S.LookupContainer>
  );
};

export default Lookup;
