import styled, { css } from "styled-components";
import { Moon, Sunny } from '@styled-icons/ionicons-outline';

export const StyledDarkLightModeContainer = styled.div`

    position: absolute;
    right: 0;
    top: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;

`;
export const StyledDarkLightModeText = styled.div`
    font-weight: 700;
    font-size: 12px;
    color: #6E7E91;
    text-transform: uppercase;
    text-align: center;
    line-height: 250%;
    padding: 5px;

`;
export const StyledDarkLightModeButtonContainer = styled.div`
    height: 24px;
    width: 46px;
    background-color: #D1D5DA4D;
    border-radius: 15px;
    border: 1px solid #6E7E91;
    display: flex;
    align-items: center;
`;

export const StyledDarkLightModeButton = styled.div`
    background-color: #6E7E91;
    height: 21px;
    width: 21px;
    border-radius: 50%;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(0px);
    transition: 1s all;
    &:hover{
        cursor: pointer;
    }
    ${({ value }) => value && css`
        transform: translateX(21px) rotateZ(360deg);
        transition: .5s all;
    `}
`;
export const StyledMoonIcon = styled(Moon)`
    background-color: transparent;
    height: 17px;
    width: 17px;
    color: white;
`;
export const StyledSunnyIcon = styled(Sunny)`
    background-color: transparent;
    height: 17px;
    width: 17px;
    color: white;
`;