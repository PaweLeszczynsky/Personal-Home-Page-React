import styled from "styled-components";

export const StyledListComponentContainer = styled.div`
    min-width: 100%;
    background-color: white;
    box-shadow: 0px 16px 58px 0px #090A3308;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
`;

export const StyledListTitle = styled.h1`
    font-weight: 900;
    font-size: 30px;

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
    padding-left: 20px;
    list-style: none;
`;

export const StyledListItem = styled.li`
    font-size: 18px;
    font-weight: 400;
    color: rgba(110, 126, 145, 1);
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    margin-top: 10px;
    &::before{
        content: "";
        height: 9px;
        width: 9px;
        border-radius: 50%;
        background-color:rgba(3, 102, 214, 1);
        display: inline-block;
        margin-right: 10px;
    }

`;