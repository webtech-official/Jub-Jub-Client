import React from "react";
import * as S from "./Styled";

const oneThings = ['노트북', '태블릿', '모니터']

const Check = ({ sum, description, handleApply }) => {
  return (
    <S.ModalBack>
      <S.ModalContentWrapper>
        <S.ModalText>
                    {sum <= 0 ? (
                        <>
                            1개 이상 대여 신청<br />
                            신청 가능합니다.
                        </>
                    ) : (
                        oneThings.indexOf(description) !== -1 ? (
                            sum > 1 ? (
                                <>
                                    태블릿, 모니터, 노트북은<br />
                                    하나만 대여 가능합니다!
                                </>
                            ) : (
                                <>
                                    { sum }개를 대여 하겠습니까?
                                </>
                            )
                        ) : (
                          <>
                            { sum }개를 대여 하겠습니까?
                          </>
                        )
                    )}
        </S.ModalText>
        <S.CheckBtn onClick={handleApply}>확인</S.CheckBtn>
      </S.ModalContentWrapper>
    </S.ModalBack>
  );
};

export default Check;
