import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  min-width: 1870px;
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
`;

export const ButtonWrapper = styled.div`
  ${(props) =>
    props.roles === "ROLE_ADMIN"
      ? `
        width: 80%;
      ` : `
        width: 250px;
        display: flex;
        justify-content: space-between;
        margin: 0 25px;
      `
    }
  span {
    font-size: 16px;
    color: white;
    ${(props) =>
    props.roles === "ROLE_ADMIN"
        ? `
        float: left;
        margin-left: 12%;
      `: ``
    }
    padding: 12px 2px;
    &:hover {
      filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
      cursor: pointer;
    }
  }
  ${(props) =>
    props.roles === "ROLE_ADMIN"
      ? `
        button {
    float: right;
    margin-right: 30px;
  }
      `
      : `

      `}
`;
