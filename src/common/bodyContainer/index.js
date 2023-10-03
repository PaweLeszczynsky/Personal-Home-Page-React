import AboutMe from "../aboutMe";
import DarkLightModeButton from "../darkLightModeButton";
import Skills from "../skills";
import WhatLearnNext from "../whatLearnNext";
import { StyledBodyContainer } from "./styled"

const BodyContainer = () => (
    <StyledBodyContainer>
        <AboutMe />
        <DarkLightModeButton/>
        <Skills/>
        <WhatLearnNext/>
    </StyledBodyContainer>
);
export default BodyContainer;