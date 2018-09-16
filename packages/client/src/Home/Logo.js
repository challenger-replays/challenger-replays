import styled from 'styled-components';
import logo from './logo.png';

const Logo = styled.div`
  display: none;

  @media (min-width:350px) {
    display: block;
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    margin-right: 6px;
    background-image: url("${logo}");
    background-origin: border-box;
    background-position-x: center;
    background-position-y: 6px;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export default Logo;
