import React, { useCallback, useState } from "react";
import {
  BackApply,
  MainBox,
  ContentBox,
  ApplyImg,
  ApplyBox,
  HeadingTitle,
  ApplySort,
  BtnBox,
  BtnI,
  BtnSum,
  SubBtn,
} from "./Styled";
import { TestImg } from "../../img/index";
import Check from "./Check";
import { Modal } from "../../Styles";

const Apply = () => {
  let [applSort] = useState("태블릿");
  let [applSum, setApplSum] = useState(0);
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
  return (
    <>
      <BackApply>
        <MainBox>
          <ContentBox>
            <ApplyImg src={TestImg} />
            <ApplyBox>
              <HeadingTitle>test</HeadingTitle>
              <ApplySort>{applSort}</ApplySort>
              <BtnBox>
                <BtnI onClick={prevBtn}>–</BtnI>
                <BtnSum>{applSum}</BtnSum>
                <BtnI onClick={nextBtn}>+</BtnI>
              </BtnBox>
              <SubBtn onClick={allowModalOpen}>대여</SubBtn>
            </ApplyBox>
          </ContentBox>
        </MainBox>
      </BackApply>
      <Modal is_open={is_open.open} setOpen={CloseModal}>
        {is_open.component === "check" && (
          <Check sum={applSum} sort={applSort} />
        )}
      </Modal>
    </>
  );
};

export default Apply;
