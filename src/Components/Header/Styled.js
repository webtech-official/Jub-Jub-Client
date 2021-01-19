import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 10%;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  margin: 15px 25px;
`;

const ButtonWrapper = styled.span`
  width: 250px;
  display: flex;
  justify-content: space-between;
  margin: 0 25px;
  @media only screen and (max-width: 700px) {
    width: 140px;
  }
`;

export { HeaderWrapper, Logo, ButtonWrapper };
