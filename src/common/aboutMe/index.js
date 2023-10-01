import { StyledContainer, StyledDescriptionContainer, StyledDescriptionParagraph, StyledPictureContainer } from "./styled";

const AboutMe = () => (

    <StyledContainer>
        <StyledPictureContainer/>
        <StyledDescriptionContainer>
            <StyledDescriptionParagraph
            fontSize={12}
            color={"#6E7E91"}
            fontWeight={700}
            >Hello It's Me</StyledDescriptionParagraph>
            <StyledDescriptionParagraph
            fontSize={38}
            color={"black"}
            fontWeight={900}
            >Paweł Leszczyński</StyledDescriptionParagraph>
            <StyledDescriptionParagraph
            fontSize={20}
            color={"#6E7E91"}
            fontWeight={400}
            >I'm a passionate Frontend Developer. I'am really into storyteller websites that use 3D and paralax effects. Currently looking for new job opportunities.</StyledDescriptionParagraph>
        </StyledDescriptionContainer>
    </StyledContainer>
);
export default AboutMe;