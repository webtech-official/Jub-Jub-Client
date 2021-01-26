import React, { useState } from "react";
import { Modal } from "../../Styles";
import EquipmentList from "./EquipmentList/EquipmentList";
import LaptopList from "./LaptopList/LaptopList";
import ModifyModal from "./ModifyModal";

const Admin = () => {
  const [is_open, setOpen] = useState({
    open: false,
    component: null,
    eq: "",
  });
  return (
    <>
      <EquipmentList setOpen={setOpen} />
      <LaptopList setOpen={setOpen} />
      <Modal
        is_open={is_open.open}
        setOpen={() => {
          setOpen({ open: false });
        }}
      >
        {is_open.component === "modify" && <ModifyModal setOpen={setOpen} />}
      </Modal>
    </>
  );
};

export default Admin;
