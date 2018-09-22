import PropTypes from 'prop-types';
import React from 'react';

function Url({ href, title, StyledA }) {
  return (
    <StyledA href={href} title={title}>
      {title}
    </StyledA>
  );
}

Url.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  StyledA: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

Url.defaultProps = {
  StyledA: 'a',
};

export default Url;
