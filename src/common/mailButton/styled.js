import styled from "styled-components";
import { Mail } from "styled-icons/ionicons-outline";
export const StyledMailButton = styled.a`
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

export const StyledMailIcon = styled(Mail)`
    height: 24px;
    width: 24px;
    color: white;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        height: 20px;
        width: 20px;
    }
`;

export const StyledMailButtonText = styled.p`

    color: white;
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 18px;
    }
`;