import { StyledListComponentContainer, StyledList, StyledListContainer, StyledListItem, StyledListTitle, StyledListUnderline } from "../list/styled";

const Skills = () => {
    return (
        <StyledListComponentContainer>
            <StyledListTitle>My skillset includes</StyledListTitle>
            <StyledListUnderline />
                <StyledList>
                    <StyledListItem>StyledComponents</StyledListItem>
                    <StyledListItem>StyledIcons</StyledListItem>
                    <StyledListItem>Redux Saga</StyledListItem>
                    <StyledListItem>Teamwork</StyledListItem>
                    <StyledListItem>Scrum</StyledListItem>
                    <StyledListItem>Redux Saga</StyledListItem>
                    <StyledListItem>React Router</StyledListItem>
                </StyledList>
        </StyledListComponentContainer>)
};

export default Skills;