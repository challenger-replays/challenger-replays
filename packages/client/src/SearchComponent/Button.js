import styled from 'styled-components';

const Button = styled.button`
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  height: auto;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.divider};
`;

export default Button;
