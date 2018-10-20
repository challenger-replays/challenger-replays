import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

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

const GlobalStyle = createGlobalStyle`
  body,
  input {
    color: ${p => p.theme.text};
  }
`;

class App extends React.Component {
  render() {
    const { search } = this.props.location;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Switch>
            <Route path="/search" component={SearchPage} key={search} />
            <Route exact path="/" component={HomePage} />
          </Switch>
          <GlobalStyle />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  location: ReactRouterPropTypes.location,
};

export default withRouter(App);
