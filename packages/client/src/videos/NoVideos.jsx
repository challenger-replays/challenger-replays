import PropTypes from 'prop-types';
import React from 'react';

class NoVideos extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>
          Your search - <b>{this.props.query}</b> - did not match any videos.
        </p>
        <p>Suggestions:</p>
        <ul>
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
        </ul>
      </React.Fragment>
    );
  }
}

NoVideos.propTypes = {
  query: PropTypes.string.isRequired,
};

export default NoVideos;
