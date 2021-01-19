import React, { useState } from "react";
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
import Check from './Check';
import { Modal } from '../../Styles';

const Apply = () => {
  let [applSort, setApplSort] = useState("태블릿")
  let [applSum, setApplSum] = useState(0);
  const [is_open, setOpen] = useState({
    open: false,
    component: null,
  });
  return (
    <BackApply>
      <MainBox>
        <ContentBox>
        <ApplyImg src={TestImg} />
          <ApplyBox>
            <HeadingTitle>test</HeadingTitle>
            <ApplySort>{ applSort }</ApplySort>
            <BtnBox>
              <BtnI onClick={ () => { applSum >= 1 && setApplSum(applSum - 1) } }>–</BtnI>
              <BtnSum>{ applSum }</BtnSum>
              <BtnI onClick={ () => { setApplSum(applSum + 1) } }>+</BtnI>
            </BtnBox>
            <SubBtn
             onClick={() => {
               setOpen({open: true, component:"check"})
             }}
             >
              대여
            </SubBtn>
          </ApplyBox>
        </ContentBox>
      </MainBox>
        <Modal
          is_open={is_open.open}
          setOpen={() => {setOpen({open: false})}}
        >
          {is_open.component === "check" && <Check sum={ applSum } sort={ applSort }/>}
        </Modal>
    </BackApply>
  );
};

export default Apply;
