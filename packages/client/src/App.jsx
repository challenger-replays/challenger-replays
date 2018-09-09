import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './Home';

const theme = {
  primary: '#ffb300',
  accent: '#75bdb1', // #5ECCC4 #00bcd4
  text: '#212121',
  textAccent: '#fff',
  textSecondary: '#757575',
  divider: '#bdbdbd',
};

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
