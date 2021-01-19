import styled from "@emotion/styled";
import { snow_globe_dom, ground } from "../../img/index";

const TextWrapper = styled.div`
  width : 60%;
  height: 85%;
  float: left;
  @media only screen and (max-width: 700px) {
    width: 45%;
    height: 45%;
    float: none;
  }
`;

const Text = styled.div`
  width: 65%;
  padding-top: 20%;
  padding-left: 20%;
  white-space: nowrap;
  color: #ffffff;
  display: flex;
  flex-direction: column;

  animation: neon 1.5s ease-in-out infinite alternate;
  .korText {
    font-size: 30px;
  }
  .engText {
    font-size: 80px;
    display: flex;
    justify-content: flex-end;
  }
  .firstRow {
    display: flex;
    padding-bottom : 20px;
  }
  .secondRow {
    display: flex;
    justify-content: center;
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
  @media only screen and (max-width: 700px) {
    .engText {
      justify-content: flex-start;
    }
    .secondRow {
      justify-content: flex-start;
    }
  }
`

const SnowContainer = styled.div`
  width: 40%;
  height: 85%;

  float: left;
  position: relative;
  @media only screen and (max-width: 700px) {
    width: 40%;
    height: 40%;
    float: none;
  }
`

const SnowGlobeDom = styled.div`
  width: 473px;
  height: 500px;
  border: none;
  background-image: url(${snow_globe_dom});
  background-size: cover;
  position: absolute;
  top: 40%;
  left: 0;
  z-index: 1;
  @media only screen and (max-width: 700px) {
    top: -10%;
  }
`;

const Ground = styled.div`
  width: 100%;
  height: 15%;
  background-image: url(${ground});
  float: left;
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 15%;
    float: none;
    background-position: center;
  }
`;

export { TextWrapper, Text, SnowContainer, SnowGlobeDom, Ground };
