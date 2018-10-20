import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Page from './Page';
import { getPagesSubset } from './helpers';

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  margin-top: 8px;
  padding: 0;

  @media (min-width: 1024px) {
    justify-content: start;
    padding-left: 96px;
  }
`;

class Pagination extends React.PureComponent {
  makeHref(page) {
    const { makeHref } = this.props;
    return makeHref ? makeHref(page) : undefined;
  }

  renderNextPage() {
    const { current, pages } = this.props;
    if (current === pages) {
      return null;
    }

    return (
      <Page
        key="Next"
        href={this.makeHref(current + 1)}
        text="Next"
        onPageClick={this.props.onPageClick}
      />
    );
  }

  renderPreviousPage() {
    const { current } = this.props;
    if (current < 2) {
      return null;
    }

    return (
      <Page
        key="Previous"
        href={this.makeHref(current - 1)}
        text="Previous"
        onPageClick={this.props.onPageClick}
      />
    );
  }

  render() {
    const {
      current, pages, subsetLength, onPageClick,
    } = this.props;
    const pagesSubset = getPagesSubset(current, pages, subsetLength);
    return (
      <Ul>
        {this.renderPreviousPage()}
        {pagesSubset.map(page => (
          <Page
            key={page}
            href={this.makeHref(page)}
            text={page}
            onPageClick={onPageClick}
            active={page === current}
          />
        ))}
        {this.renderNextPage()}
      </Ul>
    );
  }
}

Pagination.propTypes = {
  subsetLength: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  makeHref: PropTypes.func,
  onPageClick: PropTypes.func,
};

Pagination.defaultProps = {
  subsetLength: 10,
};

export default Pagination;
export * from './helpers';
