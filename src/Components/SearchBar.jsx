import React from 'react';

class SearchBar extends React.Component {
  state = {
    string: ""
  }
  // QQ having string saved in state at both SearchBar level and parent App.js level seems redundant
  // and not SSOT single source of truth, but this must be a controlled comp and app needs to have this data as well.
  // there's gotta be a better way though.
  // focusing on the event argument was helping me clear things up and also making my head spin

  handleInput = (event) => {
    // console.log(event.target.value)
    this.setState({string: event.target.value})
    this.props.setSearchString(event)
  }
  render() {
    
    return (
      <div className="search">
       <input 
        type="text" 
        className="searchTerm" 
        placeholder="Who would you like to search for?"
        onChange={this.handleInput}
        value={this.state.string}
        />
      </div>
    );
  }

}

export default SearchBar;
