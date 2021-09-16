import React, { useState } from "react";
import ItemPage from "../../Styles/ItemPage/ItemPage";
import StudentItem from "./StudentItem/StudentItem";
import * as S from "./Styled";
import { auth_table } from "../../data/auth_table.json"
import { equipment_allow_table } from "../../data/equipment_allow_table.json"
import {equipment_table} from "../../data/equipment_table.json"

const Student = ({ match }) => {
  // const [is_open, setOpen] = useState({
  //   open: false,
  //   component: null,
  // });
  const [page, setPage] = useState(1);
  const [items] = useState(equipment_allow_table.filter(val => val.u_Idx === 33));
  const [status] = useState("");
  const currentLength = items.length;
  const StudentItemList = items
    .filter(
      (item, index) => index + 1 <= page * 5 && index + 1 > (page - 1) * 5
    )
    .map((item, index) => <StudentItem itemInfo={{name : equipment_table[index].name, description : equipment_table[index].description}} allowInfo={item} key={index} />);
  const user = auth_table.filter(
    (item) => item.classnum === parseInt(match.params.classnum)
  );
  const { classnum, name } = user[0];
  return (
    <S.MyWrapper>
      <S.MyBox>
        <S.MyContainer>
          <div className="name">
            {classnum} {name}
          </div>
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
        </S.MyContainer>
      </S.MyBox>
    </S.MyWrapper>
  );
};

export default Student;
