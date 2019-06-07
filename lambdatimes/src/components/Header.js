import React from 'react';
import styled, { css } from 'styled-components';
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    .header {
      width: 1280px;
    }
  }
  h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }
  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

const Information = styled.span`
  flex: 1;

  ${props =>
    props.date &&
    css`
      margin-left: 25px;
    `}
  ${props =>
    props.temp &&
    css`
      text-align: right;
      margin-right: 25px;
    `}
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Information date>MARCH 31, 2018</Information>
      <h1>Lambda Times</h1>
      <Information temp>98°</Information>
    </HeaderContainer>
  );
};

export default Header;
