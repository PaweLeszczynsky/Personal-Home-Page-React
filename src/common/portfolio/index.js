import ErrorPendingRepos from "../errorPendingRepos";
import { useRepos } from "../getRepositories";
import PendingRepos from "../pendingRepos";
import PortfolioProjects from "../portfolioProjects";
import { StyledGitLogo, StyledPortfolioContainer, StyledPortfolioHeader, StyledPortfolioHeaderContainer, StyledPortfolioParagraph } from "./styled";

const Portfolio = () => {

    const { reposArray, apiStatus } = useRepos();

    return (
        <StyledPortfolioContainer>
            <StyledPortfolioHeaderContainer>
                <StyledGitLogo />
                <StyledPortfolioHeader>Portfolio</StyledPortfolioHeader>
                <StyledPortfolioParagraph>My recent projects</StyledPortfolioParagraph> 
            </StyledPortfolioHeaderContainer>
            {apiStatus === "Pending" && (
                <PendingRepos />
            )}
            {apiStatus === "Success" && (
                <PortfolioProjects reposArray={reposArray}></PortfolioProjects>
            )}
            {apiStatus === "Error" && (
                <ErrorPendingRepos></ErrorPendingRepos>
            )}
        </StyledPortfolioContainer>
    )

};

export default Portfolio;