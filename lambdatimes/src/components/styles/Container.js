import styled, {css} from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
    @media (min-width: 1280px) {
      width: 1280px;
    }
  
  ${props => props.left && css`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    span {
      cursor: pointer;
      margin-right: 25%;
      font-weight: bold;
    }
`}
  ${props => props.center && css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
    span {
      cursor: pointer;
      margin-right: 5%;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        text-decoration: underline;
      }
    }
`}
  ${props => props.right && css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    span {
      cursor: pointer;
    }
`}
`;

export default Container;