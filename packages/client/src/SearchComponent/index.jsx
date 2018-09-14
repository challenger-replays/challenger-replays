import React from 'react';
import Form from './Form';
import Input from './Input';
import Submit from './Submit';

class SearchComponent extends React.Component {
  searchInput = React.createRef();

  componentDidMount() {
    this.searchInput.current.focus();
  }

  render() {
    return (
      <Form>
        <Input ref={this.searchInput} />
        <Submit />
      </Form>
    );
  }
}

export default SearchComponent;
