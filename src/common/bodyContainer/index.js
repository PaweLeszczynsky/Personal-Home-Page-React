import AboutMe from "../aboutMe";
import DarkLightModeButton from "../darkLightModeButton";
import { StyledBodyContainer } from "./styled"

const BodyContainer = () => (
    <StyledBodyContainer>
        <AboutMe />
        <DarkLightModeButton/>
    </StyledBodyContainer>
);
export default BodyContainer;