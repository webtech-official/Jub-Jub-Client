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

export const ButtonWrapper = styled.span`
  width: 250px;
  display: flex;
  justify-content: space-between;
  margin: 0 25px;
  span {
    font-size: 16px;
    color: white;
    padding: 12px 2px;
    &:hover {
      filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
      cursor: pointer;
    }
  }
`;

export const ModalBack = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 15%;
`;

export const ModalText = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  color: black;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
`;

export const CheckBtn = styled.button`
  width: 100px;
  height: 65px;
  color: white;
  background-color: black;
  border-radius: 10px;
  text-align: center;
  font-size: 24px;
  margin-top: 40px;
  border: none;
`;
