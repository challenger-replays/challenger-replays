import PropTypes, { string } from 'prop-types';

export const snippet = PropTypes.shape({
  channelId: string.isRequired,
  channelTitle: string.isRequired,
  channelUrl: string.isRequired,
  publishedAt: string.isRequired,
  title: string.isRequired,
  thumbnails: PropTypes.object.isRequired,
  videoId: string.isRequired,
  videoUrl: string.isRequired,
});
