import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  width: 900px;
  height: 600px;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: #282828;
  border-radius: 10px 0px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const RightContainer = styled.div`
  width: 600px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img``;

export const MarkBox = styled.div`
  font-size: 344px;
  line-height: 374px;
  text-align: center;
  color: #ffffff;
  transform: rotate(-15deg);
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const XMarkContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const XMark = styled.img`
  cursor: pointer;
`;

export const ModalContentBox = styled.div`
  height: 80%;
  margin: auto 40px;
`;
