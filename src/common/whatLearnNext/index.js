import { StyledList, StyledListComponentContainer, StyledListItem, StyledListTitle, StyledListUnderline } from "../list/styled";

const WhatLearnNext = () => (
    <StyledListComponentContainer>
        <StyledListTitle>What I want to learn next</StyledListTitle>
        <StyledListUnderline />
        <StyledList>
            <StyledListItem>Three.js</StyledListItem>
            <StyledListItem>JS Classes</StyledListItem>
            <StyledListItem>TypeScript</StyledListItem>
            <StyledListItem>Scrum</StyledListItem>
            <StyledListItem>Redux Saga</StyledListItem>
            <StyledListItem>React Router</StyledListItem>
        </StyledList>

    </StyledListComponentContainer>

);
export default WhatLearnNext;