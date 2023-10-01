import { useState } from "react";
import { StyledDarkLightModeButton, StyledDarkLightModeButtonContainer, StyledDarkLightModeContainer, StyledDarkLightModeText, StyledMoonIcon, StyledSunnyIcon } from "./styled";

const DarkLightModeButton = () => {

    let [darkLightModeState, setDarkLightModeState] = useState(false);

    const changeVal = () => {
        setDarkLightModeState(darkLightModeState => darkLightModeState = !darkLightModeState);
    }
    return (
        <StyledDarkLightModeContainer>
            <StyledDarkLightModeText>Dark mode {darkLightModeState === false ? "off" : "on"}</StyledDarkLightModeText>
            <StyledDarkLightModeButtonContainer>
                <StyledDarkLightModeButton value={darkLightModeState} onClick={() => changeVal()}>
                    {darkLightModeState === false ? <StyledSunnyIcon /> : <StyledMoonIcon />}
                </StyledDarkLightModeButton>
            </StyledDarkLightModeButtonContainer>
        </StyledDarkLightModeContainer>
    )
};
export default DarkLightModeButton;