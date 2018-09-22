import styled from 'styled-components';
import { A, H2 as Header2 } from '../../components';

export const AChannel = styled(A)`
  display: block;
`;

export const AVideo = styled(A)`
  display: block;
`;

export const H2 = styled(Header2)``;

export const Videos = styled.div`
  dispay: flex;
`;

export const Wrapper = styled.section`
  display: none;
  background-color: ${p => p.theme.primary};

  @media (min-width: 1024px) {
    display: block;
    width: 36%;
    height: 100vh;
    padding-right: 32px;
    padding-left: 32px;
  }
`;
