import React from 'react';
import * as PropTypesRepo from '../../types';
import DesktopSnippet from './DesktopSnippet';
import MobileSnippet from './MobileSnippet';

const isMobileWidth = () => 1024 > window.outerWidth;

class RowSnippet extends React.PureComponent {
  state = {
    isMobile: isMobileWidth(),
  };

  timeoutId = 0;

  onWindowResize = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      this.setState({ isMobile: isMobileWidth() });
    }, 66);
  };

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  render() {
    const { isMobile } = this.state;
    const Component = isMobile ? MobileSnippet : DesktopSnippet;

    const { thumbnails } = this.props.details;
    const lowestThumbnailKey = Object.keys(thumbnails)[0];
    const thumbnail = thumbnails[lowestThumbnailKey];

    return <Component details={{ ...this.props.details, thumbnail }} />;
  }
}

RowSnippet.propTypes = {
  details: PropTypesRepo.snippet.isRequired,
};

export default RowSnippet;
