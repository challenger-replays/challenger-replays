import styled from 'styled-components';
import { Logo as BaseLogo } from '../styled';

const Logo = styled(BaseLogo)`
  display: block;
  margin-right: 16px;
  margin-left: 16px;
  width: 64px;
  height: 64px;

  @media (max-width: 1023px) {
    margin-bottom: 4px;
  }
`;

export default Logo;
