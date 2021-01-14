import React, { useState } from "react";
import { data } from "./dummy.json";
import ItemPage from "../../Styles/ItemPage/ItemPage";
import MypageItem from "./MypageItem/MypageItem";
import MypageSide from "./MypageSide/MypageSide";
import * as S from "./Styled";

const Mypage = () => {
  const [page, setPage] = useState(1);
  const [items] = useState(data);
  const [status, setStatus] = useState("");
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
    <S.MyWrapper>
      <S.MyBox>
        <S.MySide>
          <MypageSide statusFilter={statusFilter} setPage={setPage} />
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
            {MypageItemList}
          </ItemPage>
        </S.MyContainer>
      </S.MyBox>
    </S.MyWrapper>
  );
};

export default Mypage;
