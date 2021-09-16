import React, { useCallback, useEffect, useState } from "react";
import * as S from "./Styled"
import Check from "./Check";
import { useRecoilState } from "recoil";
import { equipmentItemState } from "../../Util/AdminStore/AdminStore";
import Admin from "../../Assets/Api/Admin";
import {equipment_table} from "../../Data/equipment_table.json"
import Student from "../../Assets/Api/Student";
import { useHistory } from "react-router";
import ModalPortal from "../ModalPortal/ModalPortal";
import useModal from "../../Hooks/useModal";

const oneThings = ['노트북', '태블릿', '모니터']

const Apply = ({match}) => {
  const [applSum, setApplSum] = useState(0);
  const [reason, setReason] = useState("")
  const [equipmentItem, setEquipmentItem] = useState(equipment_table[2])
  const history = useHistory();
  const {equ_Idx, description, amount, name, img_equipment} = equipmentItem; 
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
    console.log(amount, applSum)
    applSum < amount ? setApplSum(applSum + 1) : alert("최대 수량입니다.");
  }, [applSum, amount]);
  const allowModalOpen = () => {
    toggleModal()
  };
  // useEffect(() => {
  //   Admin.equipmentDetail(parseInt(match.params.id)).then(res => {
  //     console.log(res.Data, equipmentItem ,"api equipdetail")
  //     setEquipmentItem(res.Data.Data)
  //   })
  // }, [match.params.id, setEquipmentItem])
  const handleApply = () => {
    // Student.equipmentApplyStudent(name, applSum, reason).then(res => {
    //   alert(res.Data.msg)
    //   setOpen(false)
    //   history.push("/")
    // })
    if (applSum === 0) {
    } else if ((oneThings.indexOf(description) !== -1) && applSum > 1) {
    } else {
      history.push('/Main')
    }
    toggleModal()
  }
  //리팩토링
  const { isShow, toggleModal } = useModal();
  useEffect(()=>{
    window.scrollTo(0,0)
  }, []);
  return (
    <>
      <S.BackApply>
        <S.MainBox>
          <S.ContentBox>
            <S.ApplyImg src={img_equipment} alt="ItemImage" />
            <S.ApplyBox>
              <S.HeadingTitle>{name}</S.HeadingTitle>
              <S.ApplySort>{description}</S.ApplySort>
              <S.BtnBox>
                <S.BtnI onClick={prevBtn}>–</S.BtnI>
                <S.BtnSum>{applSum}</S.BtnSum>
                <S.BtnI onClick={nextBtn}>+</S.BtnI>
              </S.BtnBox>
              <S.ReasonWrapper>
                <S.ReasonTitle>목적</S.ReasonTitle>
                <S.ReasonInput rows="7" value={reason} onChange={handleChangeReason} />
              </S.ReasonWrapper>
              <S.SubBtn onClick={allowModalOpen}>대여</S.SubBtn>
              <S.SubBtn onClick={() => {history.goBack()}} >취소</S.SubBtn>
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
