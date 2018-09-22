import PropTypes from 'prop-types';
import React from 'react';
import Url from './Url';
import { AChannel, AVideo } from './styled';

class VideoSnippet extends React.Component {
  render() {
    const {
      channelId,
      channelTitle,
      publishedAt,
      title,
      thumbnails,
      videoId,
    } = this.props.details;
    return (
      <div>
        <Url href={videoId} title={title} StyledA={AVideo} />
        <Url href={channelId} title={channelTitle} StyledA={AChannel} />
      </div>
    );
  }
}

VideoSnippet.propTypes = {
  details: PropTypes.shape({
    channelId: PropTypes.string.isRequired,
    channelTitle: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnails: PropTypes.object.isRequired,
    videoId: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoSnippet;
