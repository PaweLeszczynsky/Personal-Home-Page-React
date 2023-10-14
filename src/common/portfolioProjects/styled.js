import styled from "styled-components";

export const StyledPortfolioProjectsContainer = styled.div`

    min-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        grid-template-rows: auto;
        grid-template-columns: 1fr;
    }
`;

export const StyledPortfolioProjectsRepository = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.color.font};
    background-color:${({ theme }) => theme.color.background};
    border: 6px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    padding: 30px;
    transition: .5s all;
    display: flex;
    flex-direction: column;
    gap: 10px;
    &:hover{
        border-color: ${({ theme }) => theme.color.repositoryBorderHover};
        transition: .5s all;
    }
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        padding: 20px;
    }
`;
export const StyledRepositoryHeader = styled.h3`
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.color.font};
    margin: 0;
    transition: color .5s;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 16px;
    }

`;

export const StyledRepositoryDescription = styled.p`

    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.color.font};
    margin: 0;
    text-align: left;
    transition: color .5s;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 14px;
    }
`;

export const StyledRepositoryLinksContainer = styled.div`
    display: flex;
    flex-direction:row;
    gap: 10px;
    min-width: 100%;
`;
export const StyledRepositoryLinkParagraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.color.font};
    margin: 0;
    transition: .5s all;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 14px;
    }
`;
export const StyledRepositoryLink = styled.a`
    font-weight: 400;
    font-size: 18px;
    color: rgb(29, 198, 187);
    transition: color .5s;
    text-decoration-thickness: 1px;
    text-decoration-color: rgb(29 198 187 / 25%);    
    word-break:break-all;
    &:hover{
        text-decoration-thickness: 2px;
    }
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 14px;
    }
`;