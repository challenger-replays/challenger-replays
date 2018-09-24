import styled from 'styled-components';
import logo from './logo.png';

export const Logo = styled.div`
  display: block;
  flex-shrink: 0;
  background-image: url("${logo}");
  background-origin: border-box;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
