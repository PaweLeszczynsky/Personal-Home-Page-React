import styled from "styled-components";

export const StyledListComponentContainer = styled.div`
    min-width: 100%;
    background-color: ${({ theme }) => theme.color.sectionBackground};
    box-shadow: 0px 16px 58px 0px #090A3308;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    transition: .5s all;
`;

export const StyledListTitle = styled.h1`
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.color.header};
    transition: all .5s;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 18px;
    }
    

`;
export const StyledListUnderline = styled.div`
    height: 1px;
    width: 100%;
    background-color:rgba(209, 213, 218, 0.3);
    
`;

export const StyledListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;
export const StyledList = styled.ul`
    padding-left: 0px;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 100px;
    @media (max-width:${({ theme }) => theme.mediaWidth.tablet}px){
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        grid-template-columns: 1fr;
        margin: 0;
    }
`;

export const StyledListItem = styled.li`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.font};
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    margin-top: 10px;
    transition: all.5s;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 14px;
    }
    &::before{
        content: "";
        height: 9px;
        width: 9px;
        border-radius: 50%;
        background-color:${({ theme }) => theme.color.supplementItemsColor};
        display: inline-block;
        margin-right: 10px;
        transition: all.5s;
        @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
            height: 6px;
            width: 6px;
    }
    }

`;