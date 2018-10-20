import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import UrlSearchParams from 'url-search-params';
import SearchForm from '../SearchForm';
import NoVideos from '../videos/NoVideos';
import SearchVideos from '../videos/SearchVideos';
import HeaderBlock from './HeaderBlock';
import Logo from './Logo';
import Pagination, { getPaginationProps } from '../Pagination';

const SearchVideosBox = styled.div`
  padding-top: 16px;
  padding-right: 8px;
  padding-bottom: 16px;
  padding-left: 8px;

  @media (min-width: 1024px) {
    padding-left: 96px;
  }
`;

const Section = styled.section`
  padding-bottom: 32px;
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

  makeHref = (page) => {
    const { query, limit } = this.state;
    const offset = limit * (page - 1);
    return `/search?q=${query}&offset=${offset}`;
  };

  onSearch = (query) => {
    this.props.history.push(`/search?q=${query}`);
  };

  onPageClick = (e) => {
    e.preventDefault();
    const { target } = e;
    this.props.history.push(`${target.pathname}${target.search}`);
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

  renderPagination() {
    const { limit, offset, total } = this.state;
    if ([limit, offset, total].some(value => !Number.isInteger(value))) {
      return null;
    }
    const props = getPaginationProps({ limit, offset, total });
    return (
      <Pagination
        {...props}
        makeHref={this.makeHref}
        onPageClick={this.onPageClick}
      />
    );
  }

  renderVideosBox() {
    const { query, snippets } = this.state;

    if (!snippets) {
      // not loaded yet
      return null;
    }

    return (
      <SearchVideosBox>
        {0 === snippets.length ? (
          <NoVideos query={query} />
        ) : (
          <SearchVideos snippets={snippets} />
        )}
      </SearchVideosBox>
    );
  }

  render() {
    const { query } = this.state;

    if (!query) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <HeaderBlock>
          <Link to="/">
            <Logo />
          </Link>
          <SearchForm initial={{ query }} onSearch={this.onSearch} />
        </HeaderBlock>
        <Section>
          {this.renderVideosBox()}
          {this.renderPagination()}
        </Section>
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  history: ReactRouterPropTypes.history,
  location: ReactRouterPropTypes.location,
};

export default Search;
