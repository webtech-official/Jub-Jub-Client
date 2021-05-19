import React, { useCallback, useEffect, useState } from "react";
import * as S from "./Styled"
import Check from "./Check";
import { Modal } from "../../Styles";
import { useRecoilState } from "recoil";
import { equipmentItemState } from "../../Util/AdminStore/AdminStore";
import Admin from "../../assets/Api/Admin";
import Student from "../../assets/Api/Student";
import { useHistory } from "react-router";

const Apply = ({match}) => {
  let [applSum, setApplSum] = useState(0);
  const [reason, setReason] = useState("")
  const [equipmentItem, setEquipmentItem] = useRecoilState(equipmentItemState)
  const [is_open, setOpen] = useState({
    open: false,
    component: null,
  });
  const history = useHistory();
  const {equ_Idx, content, count, name, img_equipment} = equipmentItem; 
  const handleChangeReason = useCallback((e) => {
    setReason(e.target.value)
  }, []);
  const CloseModal = () => {
    toggleModal()
  };
  const prevBtn = useCallback(() => {
    applSum >= 1 && setApplSum(applSum - 1);
  }, [applSum]);
  const nextBtn = useCallback(() => {
    console.log(count, applSum)
    applSum < count ? setApplSum(applSum + 1) : alert("최대 수량입니다.");
  }, [applSum, count]);
  const allowModalOpen = () => {
    toggleModal()
  };
  useEffect(() => {
    Admin.equipmentDetail(parseInt(match.params.id)).then(res => {
      console.log(res.data, equipmentItem ,"api equipdetail")
      setEquipmentItem(res.data.data)
    })
  }, [match.params.id, setEquipmentItem])
  const handleApply = () => {
    Student.equipmentApplyStudent(name, applSum, reason).then(res => {
      alert(res.data.msg)
      history.push("/")
    })
    toggleModal()
  }
  console.log(equipmentItem, "equipmentItem")
  console.log(content)
  //리팩토링
  const { isShow, toggleModal } = useModal();

  return (
    <>
      <S.BackApply>
        <S.MainBox>
          <S.ContentBox>
            <S.ApplyImg src={img_equipment} alt="ItemImage" />
            <S.ApplyBox>
              <S.HeadingTitle>{name}</S.HeadingTitle>
              <S.ApplySort>{content}</S.ApplySort>
              <S.BtnBox>
                <S.BtnI onClick={prevBtn}>–</S.BtnI>
                <S.BtnSum>{applSum}</S.BtnSum>
                <S.BtnI onClick={nextBtn}>+</S.BtnI>
              </S.BtnBox>
              <S.ReasonWrapper>
                <S.ReasonTitle>목적</S.ReasonTitle>
                <S.ReasonInput type="text" value={reason} onChange={handleChangeReason} />
              </S.ReasonWrapper>
              <S.SubBtn onClick={allowModalOpen}>대여</S.SubBtn>
            </S.ApplyBox>
          </S.ContentBox>
        </S.MainBox>
      </S.BackApply>
      <ModalPortal isShow={isShow}>
          <Check sum={applSum} description={description} handleApply={handleApply} />
      </ModalPortal>
    </>
  );
};

export default Apply;
