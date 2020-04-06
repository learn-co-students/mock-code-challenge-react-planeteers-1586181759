import React, {Component} from 'react';

class SearchBar extends Component {

  handleChange = e => {
    this.props.changeSearchTerm(e.target.value)
  }


  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" placeholder="Who would you like to search for?" value={this.props.searchedTerm}
          onChange={this.handleChange}

       />
      </div>
    );
  }

}

export default SearchBar;
