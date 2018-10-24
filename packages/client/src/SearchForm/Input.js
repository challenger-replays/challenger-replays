import styled from 'styled-components';
import { Input as CommonInput } from '../styled';
import { trackableViewport } from '../hocs';

const Input = styled(CommonInput).attrs({
  placeholder: 'Find champions, players and more...',
  type: ({ viewport }) => (viewport.isMobile ? 'search' : 'text'),
  autocapitalize: ({ viewport }) => (viewport.isMobile ? 'none' : undefined),
  autocomplete: ({ viewport }) => (viewport.isMobile ? 'off' : undefined),
  autocorrect: ({ viewport }) => (viewport.isMobile ? 'off' : undefined),
})`
  flex-grow: 1;
  flex-shrink: 0;
  border: none;
  background: inherit;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

export default trackableViewport(Input);
