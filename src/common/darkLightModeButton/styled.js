import styled, { css } from "styled-components";
import { Moon, Sunny } from '@styled-icons/ionicons-outline';

export const StyledDarkLightModeContainer = styled.div`

    position: absolute;
    right: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;

`;
export const StyledDarkLightModeText = styled.div`
    font-weight: 700;
    font-size: 12px;
    color: ${({theme})=>theme.color.font};
    text-transform: uppercase;
    text-align: center;
    line-height: 250%;
    padding: 5px;
    transition: all .5s;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        display:none;
    }

`;
export const StyledDarkLightModeButtonContainer = styled.div`
    height: 24px;
    width: 46px;
    background-color: ${({theme})=>theme.color.buttonThemeBackground};
    border-radius: 15px;
    border: 1px solid ${({theme})=>theme.color.buttonThemeBorder};
    display: flex;
    align-items: center;
    transition:.5s all;
`;

export const StyledDarkLightModeButton = styled.div`
    background-color: ${({theme})=>theme.color.buttonThemeIconBackground};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(0px);
    transition: .5s transform;
    &:hover{
        cursor: pointer;
    }
    ${({ value}) => value && css`
        transform: translateX(22px) rotateZ(360deg);
        transition: .5s transform;
    `}
`;
export const StyledMoonIcon = styled(Moon)`
    background-color: transparent;
    height: 18px;
    width: 18px;
    color: ${({theme})=>theme.color.buttonThemeIconColor};
`;
export const StyledSunnyIcon = styled(Sunny)`
    background-color: transparent;
    height: 18px;
    width: 18px;
    color: ${({theme})=>theme.color.buttonThemeIconColor};
`;