import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './Home';
import Search from './Search';

const theme = {
  primary: '#ffb300',
  darkPrimary: '#dfa00c',
  accent: '#75bdb1', // #5ECCC4 #00bcd4
  text: '#212121',
  textAccent: '#fff',
  textSecondary: '#757575',
  divider: '#bdbdbd',
  borderRadius: '3px',
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/search" component={Search} />
            <Route exact path="/" component={Home} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
