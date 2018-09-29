import PropTypes from 'prop-types';
import React from 'react';

class SearchVideos extends React.Component {
  render() {
    const { snippets } = this.props;
    if (!snippets || 0 === snippets.length) {
      return null;
    }
    return (
      <ul>
        {snippets.map(snippet => (
          <li key={snippet.videoId}>{snippet.title}</li>
        ))}
      </ul>
    );
  }
}

SearchVideos.propTypes = {
  snippets: PropTypes.array,
};

export default SearchVideos;
