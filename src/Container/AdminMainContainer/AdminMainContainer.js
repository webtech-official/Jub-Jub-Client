import styled from "@emotion/styled";
import React from "react";
import { EquipmentList, LaptopList } from "../../Components";
import { Background } from "../../Styles";

const AdminMainWrapper = styled.div`
  position: absolute;
  width: 100%;
  min-width: 1440px;
  top: 113px;
  height: 2000px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const AdminMainContainer = () => {
  return (
    <>
      <AdminMainWrapper>
        <EquipmentList />
        <LaptopList />
      </AdminMainWrapper>
      <Background textHide={true} />
    </>
  );
};

export default AdminMainContainer;
