import React, { useState } from "react";
import useModal from "../../Hooks/useModal";
import ModalPortal from "../ModalPortal/ModalPortal";
import AddModal from "./AddModal";
import EquipmentList from "./EquipmentList/EquipmentList";
import ModifyModal from "./ModifyModal";

const Admin = () => {
  //리팩토링
  const { isShow, toggleModal } = useModal();
  const [modalName, setModalName] = useState("")
  return (
    <>
      <EquipmentList toggleModal={toggleModal} setModalName={setModalName} />
      <ModalPortal isShow={isShow} toggleModal={toggleModal}>
        {modalName === "add" && <AddModal toggleModal={toggleModal} />}
        {modalName === "modify" && <ModifyModal toggleModal={toggleModal} />}
      </ModalPortal>
    </>
  );
};

export default Admin;
