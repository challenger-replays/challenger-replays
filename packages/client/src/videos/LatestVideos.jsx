import React from 'react';
import styled from 'styled-components';
import { H2, Videos } from './styled';
import CardSnippet from './CardSnippet';

const Wrapper = styled.section`
  display: none;
  background-color: ${p => p.theme.primary};
  overflow-x: none;
  overflow-y: auto;

  @media (min-width: 1024px) {
    display: block;
    width: 36%;
    height: 100vh;
    padding-right: 0px;
    padding-left: 48px;
  }
`;

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
              <CardSnippet key={snippet.videoId} details={{ ...snippet }} />
            ))}
          </Videos>
        )}
      </Wrapper>
    );
  }
}

export default LatestVideos;
