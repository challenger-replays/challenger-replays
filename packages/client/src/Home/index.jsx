import PropTypes from 'prop-types';
import React from 'react';
import SearchComponent from '../SearchComponent';
import { H1 } from '../styled';
import LatestVideos from '../videos/LatestVideos';
import Wrapper from './Wrapper';
import SearchBlock from './SearchBlock';
import Logo from './Logo';
import MeetingBlock from './MeetingBlock';

class Home extends React.Component {
  onSearch = (query) => {
    this.props.history.push(`/search?q=${query}`);
  };

  render() {
    return (
      <Wrapper>
        <SearchBlock>
          <MeetingBlock>
            <Logo />
            <H1 primary>Challenger Replays</H1>
          </MeetingBlock>
          <SearchComponent onSearch={this.onSearch} />
        </SearchBlock>
        <LatestVideos />
      </Wrapper>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
