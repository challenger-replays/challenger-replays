import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import RowSnippet from './RowSnippet';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Li = styled.li`
  margin-top: 8px;

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
