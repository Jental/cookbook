import React from 'react';
import _ from 'lodash';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      terms: []
    };

    this.onSearchChangeD = _.debounce(this._onSearchChangeD , 300)
  }
  
  render() {
    return (
      <input
          type="text"
          onChange={ (e) => this.onSearchChange(e.target.value) }
          className="searchBar"
      />
    );
  }

  onSearchChange(searchString) {
    const terms = searchString.split(' ').filter((t) => t != '')
    this.setState({terms: terms});
    this.onSearchChangeD();
  }

  _onSearchChangeD() {
    this.props.onSearchTermChanged(this.state.terms);
  }
}

export default SearchBar;
