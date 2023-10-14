import { StyledContactContainer, StyledContactLink, StyledContactParagraph, StyledContactSocialsContainer,
     StyledContactSocialsFacebookIcon, StyledContactSocialsGitHubIcon, StyledContactSocialsIconLink,
      StyledContactSocialsInstagramIcon, StyledContactSocialsLinkedinIcon, StyledContactInformation } from "./styled"

const ContactAndSocials = () => {
    return (<StyledContactContainer>
        <StyledContactParagraph>LET'S TALK!</StyledContactParagraph>
        <StyledContactLink href="mailto:pawelleszczynski97@gmail.com">pawelleszczynski97@gmail.com</StyledContactLink>
        <StyledContactInformation>
            I’m always open to new projects whenever I have the time.
            If you have a website, dashboard or mobile app in mind and
            need some help to make your ideas come to life,
            feel free to conatct me
        </StyledContactInformation>
        <StyledContactSocialsContainer>
            <StyledContactSocialsIconLink href="https://www.facebook.com/PaweLeszczynsky/"><StyledContactSocialsGitHubIcon /></StyledContactSocialsIconLink>
            <StyledContactSocialsIconLink href="https://github.com/PaweLeszczynsky"><StyledContactSocialsFacebookIcon /></StyledContactSocialsIconLink>
            <StyledContactSocialsIconLink href="https://www.linkedin.com/in/pawe%C5%82-leszczy%C5%84ski-690124211/"><StyledContactSocialsLinkedinIcon /></StyledContactSocialsIconLink>
            <StyledContactSocialsIconLink href="https://www.instagram.com/paweleszczynskii/?theme=dark"><StyledContactSocialsInstagramIcon /></StyledContactSocialsIconLink>
        </StyledContactSocialsContainer>
    </StyledContactContainer>)
};
export default ContactAndSocials;