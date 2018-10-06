import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
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
    const { search } = this.props.location;
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/search" component={Search} key={search} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  location: ReactRouterPropTypes.location,
};

export default withRouter(App);
