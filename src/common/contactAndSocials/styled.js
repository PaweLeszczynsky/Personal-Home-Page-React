import styled from "styled-components";
import { LogoFacebook, LogoGithub, LogoInstagram, LogoLinkedin } from "styled-icons/ionicons-solid";

export const StyledContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    max-width: 50%;
    gap: 15px;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        max-width: 100%;
    }
`;
export const StyledContactParagraph = styled.div`

    font-weight: 700;
    font-size: 12px;
    color:${({ theme }) => theme.color.font};
    transition: color .5s;
    margin: 0;
`;
export const StyledContactInformation = styled.div`

    font-weight: 400;
    font-size: 18px;
    color:${({ theme }) => theme.color.font};
    transition: color .5s;
    margin: 0;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 14px;
    }
`;
export const StyledContactLink = styled.a`
    font-weight: 900;
    font-size: 32px;
    color:${({ theme }) => theme.color.header};
    margin: 0;
    cursor: pointer;
    text-decoration:none;
    transition: .5s color;
    &:hover{
        color:${({ theme }) => theme.color.supplementItemsColor};
        transition: .5s color;
    }
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        font-size: 18px;
    }
    @media (max-width:330px){
        font-size: 15px;
    }
`;
export const StyledContactSocialsContainer = styled.div`

    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 20px;
`;
export const StyledContactSocialsGitHubIcon = styled(LogoGithub)`

    color: ${({ theme }) => theme.color.header};
    transition: .5s all;
    &:hover{
        color:${({ theme }) => theme.color.supplementItemsColor};
        transition: .5s all;
    }
    
`;

export const StyledContactSocialsFacebookIcon = styled(LogoFacebook)`

    color: ${({ theme }) => theme.color.header};
    transition: .5s all;
    &:hover{
        color:${({ theme }) => theme.color.supplementItemsColor};
        transition: .5s all;
    }
`;

export const StyledContactSocialsLinkedinIcon = styled(LogoLinkedin)`

    color: ${({ theme }) => theme.color.header};
    transition: .5s all;
    &:hover{
        color:${({ theme }) => theme.color.supplementItemsColor};
        transition: .5s all;
    }
`;
export const StyledContactSocialsInstagramIcon = styled(LogoInstagram)`

    color: ${({ theme }) => theme.color.header};
    transition: .5s all;
    &:hover{
        color:${({ theme }) => theme.color.supplementItemsColor};
        transition: .5s all;
    }
`;
export const StyledContactSocialsIconLink = styled.a`

    height: 48px;
    width: 48px;
    @media (max-width:${({ theme }) => theme.mediaWidth.smartphone}px){
        height: 32px;
        width: 32px;
    }
`;