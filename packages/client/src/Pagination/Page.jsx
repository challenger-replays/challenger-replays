import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  margin-top: 0;
  margin-right: 4px;
  margin-bottom: 0;
  margin-left: 4px;
`;

const A = styled.a`
  color: ${p => (p.active ? p.theme.text : '#4285f4')};
  font-size: 13px;
  text-decoration: none;

  &:active,
  &:hover {
    ${p => !p.active && 'text-decoration: underline;'};
  }
`;

class Page extends React.Component {
  render() {
    const {
      active, href, text, onPageClick,
    } = this.props;
    return (
      <Li>
        <A href={href || '/'} onClick={onPageClick} active={active}>
          {text}
        </A>
      </Li>
    );
  }
}

Page.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  onPageClick: PropTypes.func,
};

export default Page;
