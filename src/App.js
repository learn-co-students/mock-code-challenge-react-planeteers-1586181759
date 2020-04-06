import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    searchInput: "",
    planeteers: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            planeteers: result
          });
        }
      )
  }

  handleInput = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  getNewArray = () => {
    let newArray = this.state.planeteers.filter(planeteer => {
      if (planeteer.name.toLowerCase().includes(this.state.searchInput)
      ||
      planeteer.bio.toLowerCase().includes(this.state.searchInput)) {
        return planeteer
      }
    })
    // this.setState({
    //   planeteers: newArray
    // })
    return newArray
  }

  addPlaneteer = (newPOJO) => {
    // let newArray = [...this.state.planeteers, newPOJO]
    // this.setState({
    //   planeteers: newArray
    // })
      fetch("http://localhost:4000/planeteers", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPOJO)
      })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              planeteers: [...this.state.planeteers,result]
            });
          }
        )
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchInput={this.state.searchInput} handleInput={this.handleInput}/>
        <RandomButton planeteers={this.state.planeteers} addPlaneteer={this.addPlaneteer}/>
        <PlaneteersContainer planeteers={this.getNewArray()}/>
      </div>
    );
  }

}

export default App;
