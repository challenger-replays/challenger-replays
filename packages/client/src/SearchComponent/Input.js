import styled from 'styled-components';
import { Input as CommonInput } from '../components';

const Input = styled(CommonInput).attrs({
  placeholder: 'Find champions, players and more...',
  type: 'text',
})`
  flex-grow: 1;
  flex-shrink: 0;
  border: none;
`;

export default Input;
