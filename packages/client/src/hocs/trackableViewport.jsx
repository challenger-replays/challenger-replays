import hoistNonReactStatics from 'hoist-non-react-statics';
import React from 'react';

const getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const isMobileWidth = function isMobileWidth() {
  return 1024 > window.outerWidth;
};

export function trackableViewport(WrappedComponent) {
  class TrackableViewport extends React.Component {
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
      }, 66.6);
    };

    componentDidMount() {
      window.addEventListener('resize', this.onWindowResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onWindowResize);
      clearTimeout(this.timeoutId);
    }

    render() {
      const { forwardedRef } = this.props;
      const viewport = {
        isMobile: this.state.isMobile,
      };
      return (
        <WrappedComponent
          viewport={viewport}
          ref={forwardedRef}
          {...this.props}
        />
      );
    }
  }

  TrackableViewport.displayName = `TrackableViewport(${getDisplayName(
    WrappedComponent,
  )})`;

  const HoistComponent = React.forwardRef((props, ref) => (
    <TrackableViewport {...props} forwardedRef={ref} />
  ));

  return hoistNonReactStatics(HoistComponent, WrappedComponent);
}
