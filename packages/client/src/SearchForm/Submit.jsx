import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Search } from '../svgs';
import Btn from './Button';

const Button = styled(Btn)`
  width: 46px;
  margin-top: -1px;
  margin-right: -1px;
  margin-bottom: -1px;
  border-top-right-radius: ${p => p.theme.borderRadius};
  border-bottom-right-radius: ${p => p.theme.borderRadius};
  background-color: ${p => (p.primary ? p.theme.primary : 'transparent')};
  color: ${p => (p.primary ? p.theme.textAccent : p.theme.divider)};

  &:hover {
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.textAccent};
  }

  &:active {
    background-color: ${p => p.theme.darkPrimary};
    color: ${p => p.theme.textAccent};
  }
`;

function Submit({ primary }) {
  return (
    <Button primary={primary}>
      <Search width="32" height="32" />
    </Button>
  );
}

Submit.propTypes = {
  primary: PropTypes.bool,
};

export default Submit;
