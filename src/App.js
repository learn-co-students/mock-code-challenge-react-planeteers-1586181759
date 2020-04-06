import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
   
  state = {
     themplanet : []
  }

  componentDidMount() {
    fetch('http://localhost:4000/planeteers')
      .then(response => response.json())
      .then(data => this.setState({ themplanet : data }))
  }

  


  render(){
    console.log(this.state.themplanet)


    return (
      <div>
        <Header        />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planeteersData={this.state.themplanet}
        
        
                            />
      </div>
    );
  }

}

export default App;
