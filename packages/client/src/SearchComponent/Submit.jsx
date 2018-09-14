import React from 'react';
import styled from 'styled-components';
import { svgs } from '../components';

const Button = styled.button`
  width: 46px;
  height: auto;
  flex-grow: 0;
  flex-shrink: 0;
  margin-top: -1px;
  margin-right: -1px;
  margin-bottom: -1px;
  margin-left: 0;
  padding: 0;
  border: none;
  border-top-right-radius: ${p => p.theme.borderRadius};
  border-bottom-right-radius: ${p => p.theme.borderRadius};
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.divider};

  &:hover {
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.textAccent};
  }

  &:active {
    background-color: ${p => p.theme.darkPrimary};
    color: ${p => p.theme.textAccent};
  }
`;

class Submit extends React.Component {
  render() {
    return (
      <Button>
        <svgs.Search width="32" height="32" />
      </Button>
    );
  }
}

export default Submit;
