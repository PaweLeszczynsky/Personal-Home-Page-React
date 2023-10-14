import styled from "styled-components";
import { Warning } from "styled-icons/ionicons-outline";

export const StyledPendingErrorContainer = styled.div`

    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:20px ;
    gap: 10px;
`;

export const StyledPendingErrorIcon = styled(Warning)`
    color: ${({ theme }) => theme.color.header};
    height: 48px;
    width: 48px;
    transition: all .5s;
`;

export const StyledPendingErrorHeader = styled.h3`

    color:${({ theme }) => theme.color.header};
    font-weight: 700;
    font-size: 24px;
    margin: 0;
    transition: all .5s;
`;

export const StyledPendingErrorParagraph = styled.p`

    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color:${({ theme }) => theme.color.header};
    transition: all .5s;
`;

export const StyledPendingErrorButton = styled.a`

    min-height: 50px;
    max-width: 150px;
    background-color: ${({ theme }) => theme.color.supplementItemsColor};
    border-radius: 4px;
    border: 1px solid rgb(140 198 187);
    color: white;
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    transition: .5s all;
    &:hover{
        filter: brightness(0.8);
        transition: .5s all;
    }
    &:focus{
        box-shadow: 0px 0px 0px 2px rgb(180 198 187);
    }
    &:active{
        box-shadow: 0px 2px 0px 0px rgba(20, 70, 32, 0.2) inset;

    }
`;