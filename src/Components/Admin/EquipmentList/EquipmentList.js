import React, { useEffect, useState } from "react";
import { ItemPage, Search } from "../../../Styles";
import Loading from "../../Lookup/Loading/Loading";
import ItemInfo from "../ItemInfo/ItemInfo";
import { data } from "./dummy.json";
import * as S from "../Styled";
import Admin from "../../../assets/Api/Admin";
import { useRecoilState } from "recoil";
import { applyListState, equipmentListState } from "../../../Util/AdminStore/AdminStore";

const EquipmentList = ({ setOpen }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [items] = useState(data);
  const [equipmentList, setEquipmentList] = useRecoilState(equipmentListState)
  useEffect(() => {
    Admin.equipmentInfoAll().then(res => {
      console.log(res)
      setEquipmentList(res.data.list)
    })
  },[setEquipmentList])
  const equipments = equipmentList
    .filter((item, index) => equipmentList[index].name.includes(search))
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item) => (
      <ItemInfo itemInfo={item} key={item.id} setOpen={setOpen} />
    ));
    
  return (
    <>
      <S.AdminMainWrapper>
        <S.AdminMainContainer>
          <S.Top>
            <Search search={search} onChange={setSearch} />
            <S.AddBtn
              onClick={() => {
                setOpen({ open: true, component: "add" });
              }}
            >
              추가
            </S.AddBtn>
          </S.Top>
          <S.TitleBox>
            <div>
              <span className="itemNumber">번호</span>
              <span className="category">카테고리</span>
              <span className="itemName">품명</span>
              <span className="itemAmount">수량</span>
              <span className="btn"></span>
            </div>
          </S.TitleBox>
          <ItemPage id={page} setId={setPage} length={equipments.length}>
            {equipments.length === 0 ? <Loading /> : equipments}
          </ItemPage>
        </S.AdminMainContainer>
      </S.AdminMainWrapper>
    </>
  );
};

export default EquipmentList;
