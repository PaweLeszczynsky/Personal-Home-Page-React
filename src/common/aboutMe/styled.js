import styled from "styled-components";
import myImage from "../../images/cv.png"

export const StyledContainer = styled.div`
    background-color: aliceblue;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    
`;

export const StyledPictureContainer = styled.div`
    background-image: url("${myImage}");
    border-radius: 50%;
    background-color: #a7a7a7;
    min-height: 384px;
    min-width: 384px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;
export const StyledDescriptionContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
`;

export const StyledDescriptionParagraph = styled.p`
    font-weight: ${props=>props.fontWeight};
    font-size: ${props=>props.fontSize}px;
    color:${props=>props.color};
    margin: 0;
`;