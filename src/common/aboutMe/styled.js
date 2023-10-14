import styled from "styled-components";
import myImage from "../../images/cv.png"

export const StyledContainer = styled.div`
    background-color:${({ theme }) => theme.color.background};
    min-width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
    align-items: center;
    transition: .5s all;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        gap: 0;
    }
    
`;

export const StyledPictureContainer = styled.div`
    background-image: url("${myImage}");
    border-radius: 50%;
    max-height: 380px;
    background-color: #a7a7a7;
    aspect-ratio: 1/1;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        max-height: 200px;
        margin-left: 20px;
    }
`;
export const StyledDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
`;
export const StyledDescriptionHeader = styled.h1`
    font-weight: 900;
    font-size: 38px;
    color:${({theme})=>theme.color.header};
    margin: 0;
    transition: all .5s;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 22px;
    }

`;
export const StyledDescriptionParagraph = styled.p`
    font-weight: 700;
    font-size: 12px;
    color:${({theme})=>theme.color.font};
    margin: 0;
    transition: all .5s;
`;
export const StyledDescriptionBio = styled.p`
    font-weight: 400;
    font-size: 20px;
    color:${({theme})=>theme.color.font};
    margin: 0;
    transition: all .5s;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 17px;
    }
`;