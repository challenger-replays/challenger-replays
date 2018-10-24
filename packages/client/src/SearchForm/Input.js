import styled from 'styled-components';
import { Input as CommonInput } from '../styled';

const Input = styled(CommonInput).attrs({
  placeholder: 'Find champions, players and more...',
  type: 'search',
})`
  flex-grow: 1;
  flex-shrink: 0;
  border: none;
  background: inherit;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

export default Input;
