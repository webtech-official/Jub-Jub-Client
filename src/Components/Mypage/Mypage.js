import React, { useState } from "react";
import { data } from "./dummy.json";
import ItemPage from "../../Styles/ItemPage/ItemPage";
import MypageItem from "./MypageItem/MypageItem";
import MypageSide from "./MypageSide/MypageSide";
import * as S from "./Styled";

const Mypage = () => {
  const [page, setPage] = useState(1);
  const [items] = useState(data);
  const MypageItemList = items
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item, index) => <MypageItem itemInfo={item} key={index} />);
  return (
    <S.LookupWrapper>
      <S.LookupBox>
        <S.LookupSide>
          <MypageSide />
        </S.LookupSide>
        <S.LookupContainer>
          <S.TitleBox>
            <div>
              <span className="category">카테고리</span>
              <span className="itemName">품명</span>
              <span className="itemAmount">수량</span>
              <span className="rentDate">대여일</span>
              <span className="btn"></span>
            </div>
          </S.TitleBox>
          <ItemPage id={page} setId={setPage} length={items.length}>
            {MypageItemList}
          </ItemPage>
        </S.LookupContainer>
      </S.LookupBox>
    </S.LookupWrapper>
  );
};

export default Mypage;
