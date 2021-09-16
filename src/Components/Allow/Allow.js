import React, { Fragment, useState } from "react";
import { data } from "./dummy.json";
import ItemPage from "../../Styles/ItemPage/ItemPage";
import AllowItem from "./AllowItem/AllowItem";
import * as S from "./Styled";
import AllowModal from "./AllowModal";
import useModal from "../../Hooks/UseModal";
import ModalPortal from "../ModalPortal/ModalPortal";

const Allow = () => {

  const [page, setPage] = useState(1);
  const [items] = useState(data);
  const [status] = useState("");
  // const statusFilter = (status) => {
  //   setStatus(status);
  // }; 
  // 리팩토링
  const {isShow, toggleModal} = useModal()
  const [isAllow, setAllow] = useState(false)
  const currentLength = items.filter((item) => {
    return item.classNum.includes(status);
  }).length;
  const MypageItemList = items
    .filter((item) => {
      return item.classNum.includes(status);
    })
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item, index) => (
      <AllowItem itemInfo={item} setAllow={setAllow} toggleModal={toggleModal} key={index} />
    ));
  return (
    <>
      <S.AllowWrapper>
        <S.AllowBox>
          <S.AllowContainer>
            <S.TitleBox>
              <div>
                <span className="classNum">학번</span>
                <span className="category">카테고리</span>
                <span className="itemName">품명</span>
                <span className="amount">수량</span>
                <span className="btn"></span>
              </div>
            </S.TitleBox>
            <ItemPage id={page} setId={setPage} length={currentLength}>
              {MypageItemList}
            </ItemPage>
          </S.AllowContainer>
        </S.AllowBox>
      </S.AllowWrapper>
      <ModalPortal
        isShow={isShow}
      >
          <AllowModal toggleModal={toggleModal} isAllow={isAllow} />
      </ModalPortal>
    </>
  );
};

export default Allow;
