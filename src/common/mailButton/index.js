import { StyledMailButton, StyledMailButtonText, StyledMailIcon } from "./styled";


const MailButton = () => (

    <StyledMailButton href="mailto:pawelleszczynski97@gmail.com">
        <StyledMailIcon/>
        <StyledMailButtonText>Hire Me</StyledMailButtonText>
    </StyledMailButton>
);

export default MailButton;