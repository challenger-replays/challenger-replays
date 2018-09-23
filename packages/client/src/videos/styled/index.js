import styled from 'styled-components';
import { A as Anchor, H2 as Header2 } from '../../styled';

const A = styled(Anchor)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.15rem;
  max-height: 1.15rem;
`;

export const AChannel = styled(A)`
  color: #474747;
  font-size: 13px;
`;

export const AVideo = styled(A)`
  white-space: normal;
  max-height: 2.3rem;
  font-size: 14px;
  font-weight: 500;
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
