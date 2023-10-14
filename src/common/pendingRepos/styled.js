import styled from "styled-components";

export const StyledPendingReposContainer = styled.div`

    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const StyledPendingReposInfo = styled.p`

    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.color.header};
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 17px;
    }
`;
export const StyledPendingAnimationBackgroundElement = styled.div`
    height: 160px;
    width: 160px;
    background-color: ${({ theme }) => theme.color.background};
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin:  40px 0px 60px 0px;

    &::before{
        content: "";
        height: 140px;  
        width: 140px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.background};
        display: block;
    }
    animation: spiner 1s infinite linear;
    @keyframes spiner {
    0%{transform:rotateZ(0deg)}
    100%{transform:rotateZ(360deg)}
    }
    `;

export const StyledPendingAnimationFrontElement = styled.div`

    height: 80px;
    width: 80px;
    background-color: ${({ theme }) => theme.color.supplementItemsColor};
    position: absolute;
    top: 0px;
    right: 0px;
    border-top-right-radius: 100%;
    &::before{
        content: "";
        background-color: ${({ theme }) => theme.color.background};
        height: 70px;
        width: 70px;
        display: block;
        bottom: 0;
        position: absolute;
        border-top-right-radius: 100%;
    }
`;