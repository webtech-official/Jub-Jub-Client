import React, { useState } from "react";
import { data } from "./dummy.json";
import ItemPage from "../../Styles/ItemPage/ItemPage";
import StudentItem from "./StudentItem/StudentItem";
import * as S from "./Styled";
import { Modal } from "../../Styles";

const Student = () => {
  const [is_open, setOpen] = useState({
    open: false,
    component: null,
  });
  const [page, setPage] = useState(1);
  const [items] = useState(data);
  const [status, _] = useState("");
  const currentLength = items.filter((item) => {
    return item.state.includes(status);
  }).length;
  const StudentItemList = items
    .filter((item) => {
      return item.state.includes(status);
    })
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item, index) => <StudentItem itemInfo={item} key={index} />);
  return (
    <S.MyWrapper>
      <S.MyBox>
        <S.MyContainer>
          <div className="name">1101 김기홍</div>
          <S.TitleBox>
            <div>
              <span className="category">카테고리</span>
              <span className="itemName">품명</span>
              <span className="itemAmount">수량</span>
              <span className="rentDate">대여일</span>
              <span className="btn">대여</span>
            </div>
          </S.TitleBox>
          <ItemPage
            id={page}
            setId={setPage}
            length={currentLength}
            white={true}
          >
            {StudentItemList}
          </ItemPage>
          <div className="graph">김기홍 학생의 연체 그래프</div>
        </S.MyContainer>
      </S.MyBox>
      <Modal
        is_open={is_open.open}
        setOpen={() => {
          setOpen({ open: false });
        }}
      >
        {is_open.component === "a" && <div>asdasdasd</div>}
      </Modal>
    </S.MyWrapper>
  );
};

export default Student;
