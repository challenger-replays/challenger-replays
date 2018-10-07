import React from 'react';
import { trackableViewport } from '../../hocs';
import * as PropTypesRepo from '../../types';
import DesktopSnippet from './DesktopSnippet';
import MobileSnippet from './MobileSnippet';

class RowSnippet extends React.PureComponent {
  render() {
    const { isMobile } = this.props.viewport;
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

export default trackableViewport(RowSnippet);
