import React from 'react';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import UrlSearchParams from 'url-search-params';
import SearchComponent from '../SearchComponent';
import SearchVideos from '../videos/SearchVideos';
import HeaderBlock from './HeaderBlock';
import Logo from './Logo';

const SearchVideosBox = styled.div`
  padding-top: 16px;
  padding-right: 8px;
  padding-bottom: 16px;
  padding-left: 8px;
`;

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
      <React.Fragment>
        <HeaderBlock>
          <Link to="/">
            <Logo />
          </Link>
          <SearchComponent initial={{ query }} onSearch={this.onSearch} />
        </HeaderBlock>
        <SearchVideosBox>
          <SearchVideos snippets={snippets} />
        </SearchVideosBox>
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  history: ReactRouterPropTypes.history,
  location: ReactRouterPropTypes.location,
};

export default Search;
