import React, { useState } from "react";
import { Modal } from "../../Styles";
import AddModal from "./AddModal";
import EquipmentList from "./EquipmentList/EquipmentList";
import LaptopList from "./LaptopList/LaptopList";
import ModifyModal from "./ModifyModal";

const Admin = () => {
  const [is_open, setOpen] = useState({
    open: false,
    component: null,
  });
  return (
    <>
      <EquipmentList setOpen={setOpen} />
      <LaptopList setOpen={setOpen} />
      <Modal is_open={is_open.open} setOpen={() => setOpen({ open: false })}>
        {is_open.component === "add" && <AddModal setOpen={setOpen} />}
        {is_open.component === "modify" && <ModifyModal setOpen={setOpen} />}
      </Modal>
    </>
  );
};

export default Admin;
