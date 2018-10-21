import React from 'react';
import styled from 'styled-components';
import { H2 as H2Base, Videos } from './styled';
import CardSnippet from './CardSnippet';

const Wrapper = styled.section`
  flex-grow: 1;
  flex-shrink: 1;
  display: block;
  width: 100%;
  padding-top: 32px;
  background-color: inherit;

  @media (min-width: 1024px) {
    max-width: 36%;
    height: 100vh;
    padding: 0;
    padding-left: 48px;
    background-color: ${p => p.theme.primary};
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

const H2 = styled(H2Base)`
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
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
