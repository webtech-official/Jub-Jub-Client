import styled from "@emotion/styled";

const BackApply = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

const MainBox = styled.div`
  width: 1025px;
  height: 700px;
  background-color: white;
  border-radius: 30px;
  padding: 15px 32px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 100px 0;
`;

const ApplyImg = styled.img`
  width: 50%;
`;

const ApplyBox = styled.div`
  width: 50%;
`;

const HeadingTitle = styled.h2`
  display: flex;
  text-align: left;
  font-size: 48px;
  margin: 0;
  margin-bottom: 12px;
  border-bottom: 1px solid black;
`;

const ApplySort = styled.div`
  margin: 4px 0;
  font-size: 24px;
  margin-bottom: 12px;
`;

const BtnBox = styled.div`
  width: 120px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

const BtnI = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid gray;
  font-size: 24px;
  text-align: center;
  color: #464646;
  background-color: white;
  outline: none;
`;

const BtnSum = styled.span`
  width: 50px;
  font-size: 20px;
  color: #464646;
  text-align: center;
`;

const SubBtn = styled.button`
  width: 100px;
  height: 65px;
  background-color: black;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 22px;
  margin-top: 240px;
`;

const ModalBack = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 15%;
`;

const ModalText = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  color: black;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
`;

const CheckBtn = styled.button`
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
export {
  BackApply,
  MainBox,
  ContentBox,
  ApplyImg,
  ApplyBox,
  HeadingTitle,
  ApplySort,
  BtnBox,
  BtnI,
  BtnSum,
  SubBtn,
  ModalBack,
  CheckBtn,
  ModalContentWrapper,
  ModalText,
};
