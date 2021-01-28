import React from "react";
import { X } from "../../img";
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

const AddModal = ({ setOpen }) => {
  return (
    <S.ModifyWrapper>
      <S.ModifyContainer>
        <S.XContainer>
          <S.XMark src={X} onClick={() => setOpen({ open: false })} />
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
        <S.imgUpload>
          <label for="file">이미지 업로드</label>
          <input type="file" id="file" />
        </S.imgUpload>
        <S.btnBox>
          <span className="modifyBtn">추가</span>
          <span className="deleteBtn">삭제</span>
        </S.btnBox>
      </S.ModifyContainer>
    </S.ModifyWrapper>
  );
};

export default AddModal;