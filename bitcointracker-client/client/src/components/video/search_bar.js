import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <hr />
        <h2><strong>Video Search</strong></h2>
        <input
          value={this.state.term}
          placeholder={"Ethereum trends"}
          onChange={event => this.onInputChange(event.target.value)} />
          <hr />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
