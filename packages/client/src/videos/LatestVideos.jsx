import React from 'react';
import { H2, Videos, Wrapper } from './styled';
import VideoSnippet from './VideoSnippet';

class LatestVideos extends React.Component {
  state = {
    snippets: undefined,
  };

  componentDidMount() {
    fetch('/api/v1/videos/feed/')
      .then(response => response.json())
      .then(json => this.setState({ snippets: json.snippets }))
      .catch(e => console.error(`An error occured: ${e}`));
  }

  render() {
    const { snippets } = this.state;
    return (
      <Wrapper>
        <H2>Latest Videos</H2>
        {snippets && (
          <Videos>
            {snippets.map(snippet => (
              <VideoSnippet key={snippet.videoId} details={{ ...snippet }} />
            ))}
          </Videos>
        )}
      </Wrapper>
    );
  }
}

export default LatestVideos;
