import styled from "@emotion/styled";

const BackApply = styled.section`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
`;

const MainBox = styled.div`
    width: 1025px;
    height: 710px;
    background-color: white;
    border-radius: 30px;
    padding: 10px 32px;
`;

const ContentBox = styled.div`
    width: 100%;
    height: fit-content;
`;

const ApplyImg = styled.img`
    width: 50%;
`;

const ApplyBox = styled.div`
    width: 50%;
`;

const HeadingTitle = styled.h2`
    display: flex;
    text-align: left;
    font-size: 48px;
    border-bottom: 1px solid black;
`;

const ApplySort = styled.div`
    margin: 4px 0;
    font-size: 24px;
`;
export { BackApply,MainBox,ContentBox,ApplyImg,ApplyBox,HeadingTitle,ApplySort };