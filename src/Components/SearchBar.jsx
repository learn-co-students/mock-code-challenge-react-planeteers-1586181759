import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
       <input 
       type="text" 
       className="searchTerm" 
       placeholder="Who would you like to search for?"
       value={this.props.searchInput}
       onChange={this.props.handleInput}/>
      </div>
    );
  }

}

export default SearchBar;
