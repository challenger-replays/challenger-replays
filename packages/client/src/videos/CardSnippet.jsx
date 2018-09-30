import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Url from './Url';
import { AChannel, AVideo, Img } from './styled';

const Wrapper = styled.div`
  width: 210px;
  margin-right: 4px;
  margin-bottom: 24px;
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
  details: PropTypes.shape({
    channelId: PropTypes.string.isRequired,
    channelTitle: PropTypes.string.isRequired,
    channelUrl: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnails: PropTypes.object.isRequired,
    videoId: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardSnippet;
