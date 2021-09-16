import React, { Suspense, useState } from "react";
import { data } from "./dummy.json";
import ItemPage from "../../Styles/ItemPage/ItemPage";
import MypageItem from "./MyPageItem/MyPageItem";
import MypageSide from "./MyPageSide/MyPageSide";
import * as S from "./Styled";
import { PwChange } from "..";
import ModalPortal from "../ModalPortal/ModalPortal";
import useModal from "../../Hooks/useModal";
import { useRecoilValue } from "recoil";
import {myEquipmentSelector} from "../../Util/MypageStore/MypageSelector"

const MyPage = () => {
  const [page, setPage] = useState(1);
  const [items] = useState(data);
  const [status, setStatus] = useState("");
  // const myRentalList = useRecoilValue(myEquipmentSelector)
  const statusFilter = (status) => {
    setStatus(status);
  };
  const currentLength = items.filter((item) => {
    return item.state.includes(status);
  }).length;
  const MypageItemList = items
    .filter((item) => {
      return item.state.includes(status);
    })
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item, index) => <MypageItem itemInfo={item} key={index} />);
  return (
    <>
      <S.MyWrapper>
        <S.MyBox>
          <S.MySide>
            <MypageSide
              statusFilter={statusFilter}
            />
          </S.MySide>
          <S.MyContainer>
            <S.TitleBox>
              <div>
                <span className="category">카테고리</span>
                <span className="itemName">품명</span>
                <span className="itemAmount">수량</span>
                <span className="rentDate">대여일</span>
                <span className="btn"></span>
              </div>
            </S.TitleBox>
              <ItemPage id={page} setId={setPage} length={currentLength}>
                {[]}
              </ItemPage>
          </S.MyContainer>
        </S.MyBox>
      </S.MyWrapper>
    </>
  );
};

export default MyPage;
