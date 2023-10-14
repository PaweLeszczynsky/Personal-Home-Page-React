import { StyledPortfolioProjectsContainer, StyledPortfolioProjectsRepository, StyledRepositoryDescription, StyledRepositoryHeader, StyledRepositoryLink, StyledRepositoryLinkParagraph, StyledRepositoryLinksContainer } from "./styled";

const PortfolioProjects = ({ reposArray }) => {

    return (
        <StyledPortfolioProjectsContainer>

            {reposArray.map((rep, id) => (

                <StyledPortfolioProjectsRepository key={id}>
                    <StyledRepositoryHeader>{rep.name}</StyledRepositoryHeader>
                    <StyledRepositoryDescription>{rep.description}</StyledRepositoryDescription>
                    <StyledRepositoryLinksContainer>
                        <StyledRepositoryLinkParagraph>Demo:</StyledRepositoryLinkParagraph>
                        <StyledRepositoryLink href={rep.homepage}>{rep.homepage}</StyledRepositoryLink>
                    </StyledRepositoryLinksContainer>
                    <StyledRepositoryLinksContainer>
                        <StyledRepositoryLinkParagraph>Code:</StyledRepositoryLinkParagraph>
                        <StyledRepositoryLink href={rep.html_url}>{rep.url}</StyledRepositoryLink>
                    </StyledRepositoryLinksContainer>
                </StyledPortfolioProjectsRepository>

            ))
            }

        </StyledPortfolioProjectsContainer>
    )
};
export default PortfolioProjects;