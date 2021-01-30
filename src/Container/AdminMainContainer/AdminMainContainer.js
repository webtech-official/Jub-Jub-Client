import styled from "@emotion/styled";
import React from "react";
import { Admin } from "../../Components";
import { Background } from "../../Styles";

const AdminMainWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 113px;
  height: 2010px;
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
      <Background textHide={true} size={2113}/>
    </>
  );
};

export default AdminMainContainer;
