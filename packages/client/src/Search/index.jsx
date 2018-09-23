import React from 'react';

class Search extends React.Component {
  render() {
    const search = this.props.location.search;
    const output = 'Search me' + (search ? `: ${search}` : '');
    return output;
  }
}

export default Search;
