import React from 'react';
import UrlSearchParams from 'url-search-params';
import SearchComponent from '../SearchComponent';
import HeaderBlock from './HeaderBlock';
import Logo from './Logo';

class Search extends React.Component {
  onSearch = (query) => {
    this.props.history.push(`/search?q=${query}`);
  };

  componentDidMount() {
    console.log('Make a search request');
  }

  render() {
    const query = new UrlSearchParams(this.props.location.search).get('q');
    return (
      <HeaderBlock>
        <Logo />
        <SearchComponent initial={{ query }} onSearch={this.onSearch} />
      </HeaderBlock>
    );
  }
}

export default Search;
