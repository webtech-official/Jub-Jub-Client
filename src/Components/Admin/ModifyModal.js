import React from "react";
import { X } from "../../Img";
import * as S from "./Styled";

const NameContent = () => {
  return (
    <div className="nameBox">
      <div>제품명</div>
      <div>수량</div>
      <div>카테고리</div>
    </div>
  );
};

const ModifyModal = ({ toggleModal }) => {
  return (
    <S.ModifyWrapper>
      <S.ModifyContainer>
        <S.XContainer>
          <S.XMark src={X} onClick={toggleModal} />
        </S.XContainer>
        <S.ModifyContent>
          <S.ModifyImg></S.ModifyImg>
          <S.Content>
            <NameContent></NameContent>
            <S.InputBox>
              <div className="inputBox">
                <input />
              </div>
              <div className="inputBox">
                <input />
              </div>
              <div className="inputBox">
                <input />
              </div>
            </S.InputBox>
          </S.Content>
        </S.ModifyContent>
        <S.ImgUpload>
          <label for="file">이미지 업로드</label>
          <input type="file" id="file" />
        </S.ImgUpload>
        <S.BtnBox>
          <span className="modifyBtn" onClick={toggleModal} >수정</span>
          <span className="deleteBtn" onClick={toggleModal} >삭제</span>
        </S.BtnBox>
      </S.ModifyContainer>
    </S.ModifyWrapper>
  );
};

export default ModifyModal;
