import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${p => (p.primary ? p.theme.primary : p.theme.text)};
`;

export const H2 = styled.h2`
  color: ${p => (p.primary ? p.theme.primary : p.theme.text)};
`;
