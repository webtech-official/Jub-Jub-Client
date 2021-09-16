import styled from "@emotion/styled";

export const ModalBack = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalCloseBtnImageWrapper = styled.div`
  display: flex;
  justify-content: right;
  float: right;
  align-self: flex-end;
`;
export const ModalCloseBtnImage = styled.img`
  justify-content: right;
  float: right;
  align-self: right;
  align-items: right;
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
  &:hover {
    transform: scale(0.9);
    box-shadow:  5px 5px 5px rgba(116, 125, 136, .5)  
    }
`;
