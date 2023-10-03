import { StyledListComponentContainer, StyledList, StyledListContainer, StyledListItem, StyledListTitle, StyledListUnderline } from "../list/styled";

const Skills = () => (
    <StyledListComponentContainer>
        <StyledListTitle>My skillset includes</StyledListTitle>
        <StyledListUnderline />
        <StyledListContainer>
            <StyledList>
                <StyledListItem>StyledComponents</StyledListItem>
                <StyledListItem>StyledIcons</StyledListItem>
                <StyledListItem>Redux Saga</StyledListItem>
            </StyledList>
            <StyledList>
                <StyledListItem>Teamwork</StyledListItem>
                <StyledListItem>Scrum</StyledListItem>
            </StyledList>
            <StyledList>
                <StyledListItem>Redux Saga</StyledListItem>
                <StyledListItem>React Router</StyledListItem>
            </StyledList>
        </StyledListContainer>
    </StyledListComponentContainer>
);

export default Skills;