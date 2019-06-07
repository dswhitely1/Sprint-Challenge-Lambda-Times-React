import React from 'react';
import styled from 'styled-components'
import Container from "./styles/Container";

// You can find the corresponding CSS in the CSS/index.css file

const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBar = props => {
    const {logOut} = props;
    return (
        <StyledTopBar>
            <Container>
                <Container left>
                    <span>TOPICS</span><span>SEARCH</span>
                </Container>
                <Container center>
                    <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
                </Container>
                <Container right>
                    <span onClick={logOut}>LOG OUT</span>
                </Container>
            </Container>
        </StyledTopBar>
    )
};


export default TopBar;