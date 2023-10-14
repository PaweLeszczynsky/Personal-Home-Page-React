import styled from "styled-components";
import { LogoGithub } from "styled-icons/ionicons-solid";

export const StyledPortfolioContainer = styled.div`

    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        margin-bottom: 10px;
    }
    
`;

export const StyledPortfolioHeaderContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const StyledGitLogo = styled(LogoGithub)`

    height: 40px;
    width: 40px;
    color: ${({ theme }) => theme.color.supplementItemsColor};
    transition: .5s all;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        height: 32px;
        width: 32px;
    }
`;

export const StyledPortfolioHeader = styled.h2`

    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.color.header};
    margin: 0;
    transition: .5s all;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 18px;
    }
`;

export const StyledPortfolioParagraph = styled.p`

    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.color.header};
    margin: 0;
    transition: .5s all;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 17px;
    }
`;



