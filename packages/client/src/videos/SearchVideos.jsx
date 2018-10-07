import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import RowSnippet from './RowSnippet';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 1024px) {
    padding-left: 88px;
  }
`;

const Li = styled.li`
  margin-top: 16px;

  &:first-child {
    margin-top: 0;
  }
`;

class SearchVideos extends React.Component {
  render() {
    const { snippets } = this.props;
    if (!snippets || 0 === snippets.length) {
      return null;
    }
    return (
      <Wrapper>
        {snippets.map(snippet => (
          <Li key={snippet.videoId}>
            <RowSnippet details={snippet} />
          </Li>
        ))}
      </Wrapper>
    );
  }
}

SearchVideos.propTypes = {
  snippets: PropTypes.array,
};

export default SearchVideos;
