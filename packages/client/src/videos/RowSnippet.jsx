import React from 'react';
import styled from 'styled-components';
import * as PropTypesRepo from '../types';
import Url from './Url';
import { AChannel, AVideo, Img } from './styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 600px;
`;

const ThumbnailBox = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 120px;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: space-between;
  margin-left: 8px;
`;

class RowSnippet extends React.PureComponent {
  render() {
    const {
      channelTitle,
      channelUrl,
      title,
      thumbnails,
      videoUrl,
    } = this.props.details;
    const lowestThumbnailKey = Object.keys(thumbnails)[0];
    return (
      <Wrapper>
        <ThumbnailBox>
          <Url href={videoUrl} title={title}>
            <Img src={thumbnails[lowestThumbnailKey]} alt={title} />
          </Url>
        </ThumbnailBox>
        <DescriptionBox>
          <Url href={videoUrl} title={title} StyledA={AVideo} />
          <Url href={channelUrl} title={channelTitle} StyledA={AChannel} />
        </DescriptionBox>
      </Wrapper>
    );
  }
}

RowSnippet.propTypes = {
  details: PropTypesRepo.snippet.isRequired,
};

export default RowSnippet;
