import PropTypes from 'prop-types';
import React from 'react';

function Url({
  href, title, StyledA, children,
}) {
  return (
    <StyledA href={href} title={title} target="_blank" rel="noopener">
      {children || title}
    </StyledA>
  );
}

Url.propTypes = {
  children: PropTypes.object,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  StyledA: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

Url.defaultProps = {
  StyledA: 'a',
};

export default Url;
