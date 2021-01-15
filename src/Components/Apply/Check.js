import React from "react";
import * as S from "./Styled";

const Check = ({sum, sort}) => {
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
                        sort === "노트북" || "태블릿" || "모니터" ? (
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
                            ""
                        )
                    )}
                </S.ModalText>
                <S.CheckBtn>
                확인
                </S.CheckBtn>
            </S.ModalContentWrapper>
        </S.ModalBack>
    )
}

export default Check;