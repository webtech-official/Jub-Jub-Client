import React, { useCallback, useEffect, useState } from "react";
import * as S from "./Styled"
import { TestImg } from "../../img/index";
import Check from "./Check";
import { Modal } from "../../Styles";
import { useRecoilValue } from "recoil";
import { equipmentListState } from "../../Util/AdminStore/AdminStore";
import Admin from "../../assets/Api/Admin";

const Apply = ({match}) => {
  let [applSort] = useState("태블릿");
  let [applSum, setApplSum] = useState(0);
  const equipmentList = useRecoilValue(equipmentListState);
  const [is_open, setOpen] = useState({
    open: false,
    component: null,
  });
  const CloseModal = () => {
    setOpen({ is_open: false });
  };
  const prevBtn = useCallback(() => {
    applSum >= 1 && setApplSum(applSum - 1);
  }, [applSum]);
  const allowModalOpen = () => {
    setOpen({ open: true, component: "check" });
  };
  const nextBtn = useCallback(() => {
    setApplSum(applSum + 1);
  }, [applSum]);
  console.log(equipmentList, "apply equipment")
    const applyItem = equipmentList.filter(
      item => item.equ_Idx === parseInt(match.params.id))[0];
  useEffect(() => {
    Admin.equipmentDetail(match.params.id).then(res => {
      console.log(res.data)
    })
  })
   return (
    <>
      <S.BackApply>
        <S.MainBox>
          <S.ContentBox>
            <S.ApplyImg src={TestImg} />
            <S.ApplyBox>
              <S.HeadingTitle>{"name"}</S.HeadingTitle>
              <S.ApplySort>{"content"}</S.ApplySort>
              <S.BtnBox>
                <S.BtnI onClick={prevBtn}>–</S.BtnI>
                <S.BtnSum>{applSum}</S.BtnSum>
                <S.BtnI onClick={nextBtn}>+</S.BtnI>
              </S.BtnBox>
              <S.SubBtn onClick={allowModalOpen}>대여</S.SubBtn>
            </S.ApplyBox>
          </S.ContentBox>
        </S.MainBox>
      </S.BackApply>
      <Modal is_open={is_open.open} setOpen={CloseModal}>
        {is_open.component === "check" && (
          <Check sum={applSum} sort={applSort} />
        )}
      </Modal>
    </>
  );
};

export default Apply;
