import React from 'react';
import './App.css';
import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    isLoaded: false,
    searching: false
  }

  var filteredPlaneteers

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('planeteers in cdm:')
          console.log(result)
          this.setState({
            isLoaded: true,
            planeteers: result
          });
  })}

  render(){
    console.log("state:")
    console.log(this.state)
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planeteersArray={this.state.planeteers}/>
      </div>
    );
  }

}

export default App;
