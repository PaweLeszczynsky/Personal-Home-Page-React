import AboutMe from "../aboutMe";
import ContactAndSocials from "../contactAndSocials";
import DarkLightModeButton from "../darkLightModeButton";
import Portfolio from "../portfolio";
import Skills from "../skills";
import WhatLearnNext from "../whatLearnNext";
import { StyledBodyContainer, StyledContentSpace } from "./styled"

const BodyContainer = ({ changeVal, darkLightState, websiteWidth }) => {

    return (
        <StyledBodyContainer>
            <StyledContentSpace>
                <AboutMe />
                <DarkLightModeButton changeVal={changeVal} darkLightState={darkLightState} />
                <Skills />
                <WhatLearnNext />
                <Portfolio />
                <ContactAndSocials websiteWidth={websiteWidth} />
            </StyledContentSpace>
        </StyledBodyContainer>)
};
export default BodyContainer;