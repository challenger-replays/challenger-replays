import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  color: #474747;
  font-size: 13px;
  line-height: 1.15rem;
  white-space: pre;
`;

class PublishedAt extends React.PureComponent {
  render() {
    const { at, prefix } = this.props;
    const date = new Date(at).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    return <Span>{`${prefix}${date}`}</Span>;
  }
}

PublishedAt.propTypes = {
  at: PropTypes.string.isRequired,
  prefix: PropTypes.string,
};

PublishedAt.defaultProps = {
  at: '',
  prefix: '',
};

export default PublishedAt;
