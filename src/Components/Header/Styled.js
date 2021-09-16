import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: fit-content;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1;
`;

export const Logo = styled.img`
  margin: 15px 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`

  ${(props) =>
    props.roles === "ROLE_ADMIN"
      ? `
        button {
    margin-right: 30px;
  }
      `
      : `

      `}
`;
