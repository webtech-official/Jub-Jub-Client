import styled from "@emotion/styled";
import React from "react"
import { Admin } from "../../Components";
import { Background } from "../../Styles";

const AdminMainWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const AdminMainContainer = () => {
  return (
    <>
      <AdminMainWrapper>
        <Admin/>
      </AdminMainWrapper>
      <Background textHide={true} size={1080}/>
    </>
  );
};

export default AdminMainContainer;
