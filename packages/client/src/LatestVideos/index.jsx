import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 36%;
    height: 100vh;
  }
`;

class LatestVideos extends React.Component {
  render() {
    return (
      <Wrapper>
        <h2>Latest Videos</h2>
      </Wrapper>
    );
  }
}

export default LatestVideos;
