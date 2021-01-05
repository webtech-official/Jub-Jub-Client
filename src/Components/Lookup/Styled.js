import styled from "@emotion/styled";

const LookupWrapper = styled.div`
  position: absolute;
  width: 100%;
  min-width: 1440px;
  height: 900px;
  display: flex;
  justify-content: center;
  z-index: 2;
`;

const LookupContainer = styled.div`
  width: 1280px;
  height: 900px;
  background-color: #ffffff
`;

export { LookupWrapper, LookupContainer };
