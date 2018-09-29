import React from 'react';
import UrlSearchParams from 'url-search-params';
import SearchComponent from '../SearchComponent';
import SearchVideos from '../videos/SearchVideos';
import HeaderBlock from './HeaderBlock';
import Logo from './Logo';

class Search extends React.Component {
  constructor(props) {
    super(props);
    const searchParams = new UrlSearchParams(props.location.search);
    this.state = {
      query: searchParams.get('q'),
      limit: searchParams.get('limit'),
      offset: searchParams.get('offset') || 0,
    };
  }

  onSearch = (query) => {
    this.props.history.push(`/search?q=${query}`);
  };

  componentDidMount() {
    const { query, limit, offset } = this.state;
    const searchParams = new UrlSearchParams();
    searchParams.set('q', query);
    searchParams.set('limit', limit);
    searchParams.set('offset', offset);
    fetch(`/api/v1/videos/search?${searchParams.toString()}`)
      .then(response => response.json())
      .then(json => this.setState({ ...json }))
      .catch(e => console.error(`An error occured: ${e}`));
  }

  render() {
    const { query, snippets } = this.state;
    return (
      <div>
        <HeaderBlock>
          <Logo />
          <SearchComponent initial={{ query }} onSearch={this.onSearch} />
        </HeaderBlock>
        <SearchVideos snippets={snippets} />
      </div>
    );
  }
}

export default Search;
