import { useState } from "react";
import { StyledDarkLightModeButton, StyledDarkLightModeButtonContainer, StyledDarkLightModeContainer, StyledDarkLightModeText, StyledMoonIcon, StyledSunnyIcon } from "./styled";

const DarkLightModeButton = ({ changeVal}) => {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => {
        setIsToggled(!isToggled);
    }
    return (
        <StyledDarkLightModeContainer>
            <StyledDarkLightModeText>Dark mode {isToggled === false ? "off" : "on"}</StyledDarkLightModeText>
            <StyledDarkLightModeButtonContainer>
                <StyledDarkLightModeButton value={isToggled} onClick={() =>{ changeVal(); onToggle();}}>
                    {isToggled === true ? <StyledMoonIcon  /> : <StyledSunnyIcon value={isToggled}/>}
                </StyledDarkLightModeButton>
            </StyledDarkLightModeButtonContainer>
        </StyledDarkLightModeContainer>
    )
};
export default DarkLightModeButton;