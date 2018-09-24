import styled from 'styled-components';
import { Logo as BaseLogo } from '../styled';

const Logo = styled(BaseLogo)`
  display: none;
  width: 50px;
  height: 50px;
  margin-right: 6px;

  @media (min-width: 350px) {
    display: block;
  }
`;

export default Logo;
