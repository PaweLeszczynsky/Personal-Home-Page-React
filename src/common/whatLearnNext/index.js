import { StyledList, StyledListComponentContainer, StyledListContainer, StyledListItem, StyledListTitle, StyledListUnderline } from "../list/styled";

const WhatLearnNext = () => (

    <StyledListComponentContainer>
        <StyledListTitle>What I want to learn next</StyledListTitle>
        <StyledListUnderline />
        <StyledListContainer>
            <StyledList>
                <StyledListItem>Three.js</StyledListItem>
                <StyledListItem>JS Classes</StyledListItem>
            </StyledList>
            <StyledList>
                <StyledListItem>TypeScript</StyledListItem>
                <StyledListItem>Scrum</StyledListItem>
            </StyledList>
            <StyledList>
                <StyledListItem>Redux Saga</StyledListItem>
                <StyledListItem>React Router</StyledListItem>
            </StyledList>
        </StyledListContainer>
    </StyledListComponentContainer>
    
);
export default WhatLearnNext;