import React from "react";
import { Link } from "react-router-dom";
import { facebook, instagram, twitter } from "../../Img";
import * as S from "./Styled"

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.IconWrapper>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </S.IconWrapper>
      <S.TextWrapper>
        <S.InquireWrapper>
          <p>문의 062-115-6437 ㅣ Team Gsm-Web-Technologies</p>
        </S.InquireWrapper>
        <S.PrivacyPolicy>
          <Link className="link">개인정보 처리방침</Link>
        </S.PrivacyPolicy>
        <S.Copyright>
          <p>ⓒ 2020 Team Gsm-Web-Technologies</p>
        </S.Copyright>
      </S.TextWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
