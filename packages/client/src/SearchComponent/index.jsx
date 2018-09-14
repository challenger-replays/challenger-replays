import React from 'react';
import Form from './Form';
import Input from './Input';
import Reset from './Reset';
import Submit from './Submit';

class SearchComponent extends React.Component {
  state = {
    searchQuery: '',
  };

  searchInput = {
    ref: React.createRef(),
    focus() {
      this.ref.current.focus();
    },
  };

  onInputChange = e => {
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

  onSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    if (0 === searchQuery.length) {
      this.searchInput.focus();
    }
  };

  componentDidMount() {
    this.searchInput.focus();
  }

  render() {
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
        <Submit primary={isCrossVisible} />
      </Form>
    );
  }
}

export default SearchComponent;
