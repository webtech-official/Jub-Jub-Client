import styled from "@emotion/styled";

export const Button = styled.button`
  width: ${(props) => (props.isBig ? "120px" : "100px")};
  height: fit-content;
  background-color: ${(props) => `${props.backGroundColor}`};
  font-size: 16px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 12px 15px;
  text-align: center;
  color: white;
  outline: 0ch;
  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
    cursor: pointer;
  }
`;
