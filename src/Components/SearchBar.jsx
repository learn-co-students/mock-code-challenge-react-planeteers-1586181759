import React from 'react';

class SearchBar extends React.Component {

  handleChange = (e) => {
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
      this.props.changeSearch(e.target.value)
  }

  render() {
    
    return (
      <div className="search">
       <input 
              type="text" 
              className="searchTerm"
              value={this.props.search}
              onChange={this.handleChange}
              placeholder="Who would you like to search for?"
               />
      </div>
    );
  }

}

export default SearchBar;
