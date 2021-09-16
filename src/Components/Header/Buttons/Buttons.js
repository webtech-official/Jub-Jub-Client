import React from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { Button } from "../../../Styles/index";
import { isAdminState } from "../../../Util/AdminStore/AdminStore";

const Buttons = ({ token, setModalName, toggleModal }) => {
  const history = useHistory();
  const changeRouterMypage = () => {
    history.push("/MyPage");
  };
  const changeRouterAdmin = () => {
    history.push("/Admin/Main");
  };
  const changeRouterAllow = () => {
    history.push("/Allow");
  };
  const changeRouterStudent = () => {
    history.push("/Management");
  };
  const isAdmin = useRecoilValue(isAdminState);
  return (
    <>
      {token ? (
        isAdmin ? (
          <>
            <span onClick={changeRouterAdmin}>기자재 관리</span>
            <span onClick={changeRouterAllow}>기자재 대여 승인</span>
            <span onClick={changeRouterStudent}>회원 관리</span>
            <Button
              backGroundColor="black"
              isBig={true}
              onClick={() => {
                toggleModal();
                setModalName("logout");
              }}
            >
              로그아웃
            </Button>
          </>
        ) : (
          <>
            <>
            <span
              onClick={changeRouterMypage}
            >마이페이지</span>
            </>
            <Button
              backGroundColor="black"
              isBig={true}
              onClick={() => {
                toggleModal();
                setModalName("logout");
              }}
            >
              로그아웃
            </Button>
          </>
        )
      ) : (
        <>
          <Button
            backGroundColor="black"
            isBig={false}
            onClick={() => {
              toggleModal();
              setModalName("login");
            }}
          >
            로그인
          </Button>
          <Button
            backGroundColor="black"
            isBig={true}
            onClick={() => {
              toggleModal();
              setModalName("register");
            }}
          >
            회원가입
          </Button>
        </>
      )}
    </>
  );
};

export default Buttons;
