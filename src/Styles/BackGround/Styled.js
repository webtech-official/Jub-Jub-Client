import styled from "@emotion/styled";
import { snow_globe_dom, ground } from "../../img/index";

const TextWrapper = styled.div`
  position: absolute;
  width: 761px;
  height: 183px;
  top: 352px;
  left: 10%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: neon 1.5s ease-in-out infinite alternate;
  z-index: 1;
  .korText {
    font-size: 30px;
  }
  .engText {
    font-size: 80px;
  }
  .firstRow {
    display: flex;
  }
  .secondRow {
    display: flex;
    justify-content: flex-end;
  }
  @keyframes neon {
    from {
      text-shadow: 0 0 4px rgba(255, 255, 255, 1),
        0 0 8px rgba(255, 255, 255, 1), 0 0 12px rgba(255, 255, 255, 1),
        0 0 16px rgba(0, 0, 0, 0), 0 0 20px rgba(0, 0, 0, 0),
        0 0 24px rgba(0, 0, 0, 0), 0 0 28px rgba(0, 0, 0, 0),
        0 0 32px rgba(0, 0, 0, 0);
    }
    to {
      text-shadow: 0 0 1px rgba(255, 255, 255, 1),
        0 0 2px rgba(255, 255, 255, 1), 0 0 3px rgba(255, 255, 255, 1),
        0 0 4px rgba(0, 0, 0, 0), 0 0 7px rgba(0, 0, 0, 0),
        0 0 8px rgba(0, 0, 0, 0), 0 0 10px rgba(0, 0, 0, 0),
        0 0 15px rgba(0, 0, 0, 0);
    }
  }
`;

const SnowGlobeDom = styled.div`
  width: 473px;
  height: 500px;
  border: none;
  background-image: url(${snow_globe_dom});
  background-size: cover;
  position: absolute;
  left: 1154.42px;
  top: 285px;
  z-index: 1;
`;

const Ground = styled.div`
  width: 100%;
  height: 444px;
  background-image: url(${ground});
  position: absolute;
  top: 686px;
  z-index: 0;
`;

export { TextWrapper, SnowGlobeDom, Ground };
