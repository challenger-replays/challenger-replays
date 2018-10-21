import React from 'react';
import styled from 'styled-components';
import * as PropTypesRepo from '../types';
import Url from './Url';
import { AChannel, AVideo, Img as BaseImg } from './styled';

const Wrapper = styled.div`
  width: 210px;
  margin-right: 4px;
  margin-bottom: 24px;
`;

const Img = styled(BaseImg)`
  min-height: 157.5px;
`;

class CardSnippet extends React.PureComponent {
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
        <Url href={videoUrl} title={title}>
          <Img src={thumbnails[lowestThumbnailKey]} alt={title} />
        </Url>
        <Url href={videoUrl} title={title} StyledA={AVideo} />
        <Url href={channelUrl} title={channelTitle} StyledA={AChannel} />
      </Wrapper>
    );
  }
}

CardSnippet.propTypes = {
  details: PropTypesRepo.snippet.isRequired,
};

export default CardSnippet;
