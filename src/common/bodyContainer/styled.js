import styled from "styled-components";

export const StyledBodyContainer = styled.div`
    margin: 0 auto;
    background-color:${({ theme }) => theme.color.background}; 
    transition: .5s all;
`;
export const StyledContentSpace = styled.div`

    background-color:${({ theme }) => theme.color.background};
    max-width: 75%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 100px 10px 50px 10px;
    position: relative;
    align-items: center;
    transition: .5s all;

    @media (max-width:${({ theme }) => theme.mediaWidth.tablet}px){
        max-width: 95%;
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;