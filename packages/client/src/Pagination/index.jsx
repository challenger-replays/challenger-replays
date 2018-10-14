import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Page from './Page';
import { getPagesSubset } from './helpers';

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  list-style-type: none;
`;

const Li = styled.li`
  margin-top: 0;
  margin-right: 4px;
  margin-bottom: 0;
  margin-left: 4px;
`;

const A = styled.a`
  color: ${p => (p.active ? p.theme.text : p.theme.accent)};
  font-size: 13px;
  text-decoration: none;

  &:active,
  &:hover {
    ${p => !p.active && 'text-decoration: underline;'};
  }
`;

class Pagination extends React.PureComponent {
  renderNextPage() {
    const { current, pages } = this.props;
    if (current === pages) {
      return null;
    }

    return <Page key="Next" text="Next" onPageClick={this.props.onPageClick} />;
  }

  renderPreviousPage() {
    const { current } = this.props;
    if (current < 2) {
      return null;
    }

    return (
      <Page
        key="Previous"
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
  onPageClick: PropTypes.func,
};

Pagination.defaultProps = {
  subsetLength: 10,
};

export default Pagination;
export * from './helpers';
