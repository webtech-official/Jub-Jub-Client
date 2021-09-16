import React, { useCallback, useEffect, useState } from "react";
import * as S from "./Styled";
import Check from "./Check";
import { equipment_table } from "../../Data/equipment_table.json";
import { useHistory } from "react-router";
import ModalPortal from "../ModalPortal/ModalPortal";
import useModal from "../../Hooks/useModal";

const oneThings = ["노트북", "태블릿", "모니터"];

const Apply = () => {
  const [applSum, setApplSum] = useState(0);
  const [reason, setReason] = useState("");
  const [equipmentItem] = useState(equipment_table[2]);
  const history = useHistory();
  const { _, description, amount, name, img_equipment } = equipmentItem;
  const handleChangeReason = useCallback((e) => {
    setReason(e.target.value);
  }, []);
  const prevBtn = useCallback(() => {
    applSum >= 1 && setApplSum(applSum - 1);
  }, [applSum]);
  const nextBtn = useCallback(() => {
    console.log(amount, applSum);
    applSum < amount ? setApplSum(applSum + 1) : alert("최대 수량입니다.");
  }, [applSum, amount]);
  const allowModalOpen = () => {
    toggleModal();
  };
  const handleApply = () => {
    if (applSum === 0) {
    } else if (oneThings.indexOf(description) !== -1 && applSum > 1) {
    } else {
      history.push("/Main");
    }
    toggleModal();
  };
  //리팩토링
  const { isShow, toggleModal } = useModal();
  useEffect(() => {
    window.scrollTo(0, 0);
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
                <S.ReasonInput
                  rows="7"
                  value={reason}
                  onChange={handleChangeReason}
                />
              </S.ReasonWrapper>
              <S.SubBtn onClick={allowModalOpen}>대여</S.SubBtn>
              <S.SubBtn
                onClick={() => {
                  history.goBack();
                }}
              >
                취소
              </S.SubBtn>
            </S.ApplyBox>
          </S.ContentBox>
        </S.MainBox>
      </S.BackApply>
      <ModalPortal isShow={isShow}>
        <Check
          sum={applSum}
          description={description}
          handleApply={handleApply}
        />
      </ModalPortal>
    </>
  );
};

export default Apply;
