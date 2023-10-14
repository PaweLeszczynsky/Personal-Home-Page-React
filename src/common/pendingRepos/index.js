import { StyledPendingAnimationBackgroundElement, StyledPendingAnimationFrontElement, StyledPendingReposContainer, StyledPendingReposInfo } from "./styled";

const PendingRepos = () => {
    return (
        <StyledPendingReposContainer>
            <StyledPendingReposInfo>Please wait, projects are being loaded...</StyledPendingReposInfo>
            <StyledPendingAnimationBackgroundElement>
                <StyledPendingAnimationFrontElement></StyledPendingAnimationFrontElement>
            </StyledPendingAnimationBackgroundElement>
        </StyledPendingReposContainer>)
}
export default PendingRepos;