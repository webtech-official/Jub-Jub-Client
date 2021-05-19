import ReactDOM from "react-dom";
import * as S from "./Styled"


const ModalPortal = ({ isShow, children }) => {
  return isShow
    ? ReactDOM.createPortal(
        <>
        <S.ModalOverlay />
        <S.Positoner>
          {children}
        </S.Positoner>

        </>,
        document.body
      )
    : null;
};

export default ModalPortal;
