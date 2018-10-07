import PropTypes from 'prop-types';
import React from 'react';
import SearchComponent from '../SearchComponent';
import { trackableViewport } from '../hocs';
import { H1 } from '../styled';
import * as PropTypesRepo from '../types';
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
    // Search is autofocused for iPad Pros
    const isFocused = !this.props.viewport.isMobile;
    return (
      <Wrapper>
        <SearchBlock>
          <MeetingBlock>
            <Logo />
            <H1 primary>Challenger Replays</H1>
          </MeetingBlock>
          <SearchComponent initial={{ isFocused }} onSearch={this.onSearch} />
        </SearchBlock>
        <LatestVideos />
      </Wrapper>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object,
  viewport: PropTypesRepo.trackableViewport,
};

export default trackableViewport(Home);
