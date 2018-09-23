import React from 'react';
import styled from 'styled-components';
import { Cancel } from '../svgs';
import Btn from './Button';

const Button = styled(Btn)`
  width: 32px;

  &:hover {
    color: ${p => p.theme.textSecondary};
  }

  &:active {
    color: ${p => p.theme.text};
  }
`;

class Reset extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <Button type="button" onClick={onClick}>
        <Cancel width="28" height="28" />
      </Button>
    );
  }
}

export default Reset;
