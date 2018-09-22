import React from 'react';
import SearchComponent from '../SearchComponent';
import { H1 } from '../components';
import LatestVideos from '../videos/LatestVideos';
import Wrapper from './Wrapper';
import SearchBlock from './SearchBlock';
import Logo from './Logo';
import MeetingBlock from './MeetingBlock';

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <SearchBlock>
          <MeetingBlock>
            <Logo />
            <H1 primary>Challenger Replays</H1>
          </MeetingBlock>
          <SearchComponent />
        </SearchBlock>
        <LatestVideos />
      </Wrapper>
    );
  }
}

export default Home;
