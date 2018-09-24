import React from 'react';
import UrlSearchParams from 'url-search-params';
import SearchComponent from '../SearchComponent';
import HeaderBlock from './HeaderBlock';
import Logo from './Logo';

class Search extends React.Component {
  render() {
    const query = new UrlSearchParams(this.props.location.search).get('q');
    return (
      <HeaderBlock>
        <Logo />
        <SearchComponent initial={{ query }} />
      </HeaderBlock>
    );
  }
}

export default Search;
