import styled from 'styled-components';
import { A, H2 as Header2 } from '../../components';

export const AChannel = styled(A)`
  display: block;
`;

export const AVideo = styled(A)`
  display: block;
`;

export const H2 = styled(Header2)``;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const Videos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`;
