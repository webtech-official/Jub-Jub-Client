import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  font-size: 20px;
  color: #474747;
  float: left;
`;

const IconWrapper = styled.div`
  width: 190px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  img {
    width: 40px;
    height: 40px;
  }
`;

const TextWrapper = styled.div`
  height: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const InquireWrapper = styled.div`
  width: fit-content;
  p {
    text-align: center;
    margin: 0;
  }
`;

const PrivacyPolicy = styled.div`
  width: fit-content;
  text-align: center;
  .link {
    text-decoration: none;
    color: #474747;
  }
`;

const Copyright = styled.div`
  width: fit-content;
  p {
    text-align: center;
    margin: 0;
  }
`;

export {
  FooterWrapper,
  IconWrapper,
  TextWrapper,
  InquireWrapper,
  PrivacyPolicy,
  Copyright,
};
