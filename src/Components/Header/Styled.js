import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  width: 100%;
  min-width: 1870px;
  height: fit-content;
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
`;

export { HeaderWrapper, Logo, ButtonWrapper };
