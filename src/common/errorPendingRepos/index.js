import { StyledPendingErrorButton, StyledPendingErrorContainer, StyledPendingErrorHeader, StyledPendingErrorIcon, StyledPendingErrorParagraph } from "./styled";

const ErrorPendingRepos = () => {
    return (
        <StyledPendingErrorContainer>
            <StyledPendingErrorIcon />
            <StyledPendingErrorHeader>Ooops! Something went wrong...</StyledPendingErrorHeader>
            <StyledPendingErrorParagraph>Sorry, failed to load Github projects.<br/>
                You can check them directly on Github.</StyledPendingErrorParagraph>
                <StyledPendingErrorButton href="https://github.com/PaweLeszczynsky?tab=repositories">Go to Github</StyledPendingErrorButton>
        </StyledPendingErrorContainer>
    )
}
export default ErrorPendingRepos;