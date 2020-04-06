import React from 'react';

class SearchBar extends React.Component {

  handleSearch = (e) => {
    this.props.changeSearchTerm(e.target.value)
  }

  render() {
    return (
      <div className="search">
       <input 
          type="text" 
          className="searchTerm" 
          placeholder="Who would you like to search for?" 
          name="search" 
          value={this.props.searchTerm} 
          onChange={this.handleSearch}
       />
      </div>
    );
  }

}

export default SearchBar;
