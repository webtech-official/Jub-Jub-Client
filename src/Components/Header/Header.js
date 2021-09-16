import React, { useEffect, useState } from "react";
import { Login, Register } from "..";
import LogoutModal from "../LogoutModal/LogoutModal";
import { logo } from "../../Img/index";
import { ButtonWrapper, HeaderWrapper, Logo } from "./Styled";
import { useRecoilValue } from "recoil";
import { authStore } from "../../Util/AuthStore/AuthStore";
import Buttons from "./Buttons/Buttons";
import useModal from "../../Hooks/useModal";
import ModalPortal from "../ModalPortal/ModalPortal";
import { useHistory } from "react-router-dom";

const Header = () => {
  const userInfo = useRecoilValue(authStore);
  const { isShow, toggleModal } = useModal();
  const [modalName, setModalName] = useState("register");
  const { roles } = userInfo || "";
  const [token, setToken] = useState("");

  useEffect(() => {
    const val = window.localStorage.getItem("jupjup_token");
    setToken(val);
  });

  const history = useHistory();
  return (
    <>
      <HeaderWrapper>
        <Logo src={logo} onClick={() => history.push("/")} />
        <ButtonWrapper roles={roles}>
          <Buttons
            token={token}
            roles={roles}
            setModalName={setModalName}
            toggleModal={toggleModal}
          />
        </ButtonWrapper>
      </HeaderWrapper>
      <ModalPortal isShow={isShow}>
        {modalName === "login" && (
          <Login toggleModal={toggleModal} setModalName={setModalName} />
        )}
        {modalName === "register" && <Register toggleModal={toggleModal} />}
        {modalName === "logout" && <LogoutModal toggleModal={toggleModal} />}
      </ModalPortal>
    </>
  );
};

export default Header;
