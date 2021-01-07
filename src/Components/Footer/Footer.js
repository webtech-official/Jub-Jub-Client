import React from "react";
import { Link } from "react-router-dom";
import { facebook, instagram, twitter } from "../../img";
import {
  FooterWrapper,
  IconWrapper,
  TextWrapper,
  InquireWrapper,
  PrivacyPolicy,
  Copyright,
} from "./Styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <IconWrapper>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </IconWrapper>
      <TextWrapper>
        <InquireWrapper>
          <p>문의 062-115-6437 ㅣ Team Gsm-Web-Technologies</p>
        </InquireWrapper>
        <PrivacyPolicy>
          <Link className="link">개인정보 처리방침</Link>
        </PrivacyPolicy>
        <Copyright>
          <p>ⓒ 2020 Team Gsm-Web-Technologies</p>
        </Copyright>
      </TextWrapper>
    </FooterWrapper>
  );
};

export default Footer;
