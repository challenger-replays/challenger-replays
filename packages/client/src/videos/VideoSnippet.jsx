import PropTypes from 'prop-types';
import React from 'react';
import Url from './Url';
import { AChannel, AVideo } from './styled';

class VideoSnippet extends React.Component {
  render() {
    const {
      channelTitle, channelUrl, title, videoUrl,
    } = this.props.details;
    return (
      <div>
        <Url href={videoUrl} title={title} StyledA={AVideo} />
        <Url href={channelUrl} title={channelTitle} StyledA={AChannel} />
      </div>
    );
  }
}

VideoSnippet.propTypes = {
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

export default VideoSnippet;
