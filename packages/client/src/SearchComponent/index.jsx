import PropTypes from 'prop-types';
import React from 'react';
import { trackableViewport } from '../hocs';
import * as PropTypesRepo from '../types';
import Form from './Form';
import Input from './Input';
import Reset from './Reset';
import Submit from './Submit';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: props.initial.query,
    };
  }

  searchInput = {
    ref: React.createRef(),
    focus() {
      this.ref.current.focus();
    },
  };

  onInputChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  onResetClick = () => {
    this.setState(
      {
        searchQuery: '',
      },
      () => {
        this.searchInput.focus();
      },
    );
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { searchQuery } = this.state;
    if (0 === searchQuery.length) {
      this.searchInput.focus();
    } else {
      const { onSearch } = this.props;
      if (onSearch) {
        onSearch(searchQuery);
      }
    }
  };

  componentDidMount() {
    if (this.props.initial.isFocused) {
      this.searchInput.focus();
    }
  }

  render() {
    const { isMobile } = this.props.viewport;
    const { searchQuery } = this.state;
    const isCrossVisible = 0 !== searchQuery.length;
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          ref={this.searchInput.ref}
          onChange={this.onInputChange}
          value={searchQuery}
        />
        {isCrossVisible && <Reset onClick={this.onResetClick} />}
        <Submit primary={isMobile || isCrossVisible} />
      </Form>
    );
  }
}

SearchComponent.propTypes = {
  initial: PropTypes.shape({
    isFocused: PropTypes.bool,
    query: PropTypes.string,
  }),
  onSearch: PropTypes.func,
  viewport: PropTypesRepo.trackableViewport,
};

SearchComponent.defaultProps = {
  initial: {
    isFocused: false,
    query: '',
  },
};

export default trackableViewport(SearchComponent);
