import React from 'react'
import { useHistory } from 'react-router';
import {Button} from "../../../Styles/index";
const Buttons = ({token, authority, setOpen}) => {
  const history = useHistory(); 
  const changeRouterMypage = () => {
    history.push("/Mypage");
  }
    return (
        <>
         {
          token ? (
            authority[0] === "ROLE_ADMIN" ? (
                <>
                  <span>기자재 관리</span>
                  <span>기자재 대여 승인</span>
                  <span>회원 관리</span>
                  <Button
                      backGroundColor="black"
                      onClick={() => {
                      setOpen({ open: true, component: "logout" });
                      }
                    }
                    >
                        로그아웃
                  </Button>
                </>
            ) : (
              <>
                <span onClick={changeRouterMypage}>마이페이지</span>
                <Button
                      backGroundColor="black"
                      onClick={() => {
                      setOpen({ open: true, component: "logout" });
                      }
                    }
                    >
                        로그아웃
                  </Button>
              </>
            )
          ) : (
          <>
          <Button
              backGroundColor="black"
              onClick={() => {
                setOpen({ open: true, component: "login" });
            }}
          >
            로그인
          </Button>
          <Button
            backGroundColor="black"
            onClick={() => {
              setOpen({ open: true, component: "register" });
            }}
          >
            회원가입
          </Button>
          </>
          )                  
         }
        </>
    )
}

export default Buttons
