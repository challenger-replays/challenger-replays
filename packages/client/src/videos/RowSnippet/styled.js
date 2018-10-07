import styled from 'styled-components';

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: space-between;
  margin-left: 8px;
`;

export const SnippetMetaBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
`;

export const ThumbnailBox = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 120px;
`;
