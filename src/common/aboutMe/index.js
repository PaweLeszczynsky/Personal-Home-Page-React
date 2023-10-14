import MailButton from "../mailButton";
import { StyledContainer, StyledDescriptionContainer, StyledDescriptionHeader, StyledDescriptionParagraph, StyledPictureContainer, StyledDescriptionBio } from "./styled";

const AboutMe = () => {
    return (
        <StyledContainer>
            <StyledPictureContainer />
            <StyledDescriptionContainer>
                <StyledDescriptionParagraph>Hello It's Me</StyledDescriptionParagraph>
                <StyledDescriptionHeader>Paweł Leszczyński</StyledDescriptionHeader>
                <StyledDescriptionBio>
                    I'm a passionate Frontend Developer. I'am really into storyteller websites that use 3D and paralax effects. Currently looking for new job opportunities.
                </StyledDescriptionBio>
                <MailButton />
            </StyledDescriptionContainer>
        </StyledContainer>
    )
};
export default AboutMe;