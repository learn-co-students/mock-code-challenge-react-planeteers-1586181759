import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    search: ""
  }

  changeSearch = (inputFromChild) => {
    this.setState({
      search: inputFromChild
    })
  }

  componentDidMount(){

    fetch("http://localhost:4000/planeteers")
      .then(r => r.json())
      .then(planetters => {
            this.setState({planeteers: planetters}) 
      })
  }

  returnsArray = () => {
    let {planeteers, search} = this.state
    let filteredPlaneteers = planeteers.filter((planeteer)=>{
      return planeteer.name.toLowerCase().includes(search.toLowerCase()) || planeteer.bio.toLowerCase().includes(search.toLowerCase())
    })
      return filteredPlaneteers
    }

  addANewPlaneteerToDom = (newPlaneteer) => {
    //fetch here
    //
    //headers
    //body 
    //.then
    //.then
    let newPlaneteerWID = {
      ...newPlaneteer, id: Math.floor(Math.random()*1000)
    }
    let newListofPlaneteers = [...this.state.planeteers, newPlaneteerWID]
    this.setState({
      planeteers: newListofPlaneteers
    })
  }

  deletePlaneteer = (id) => {
 //console.log("hello from delete function")

 // fetch here
    let filteredArray = this.state.planeteers.filter(planeteer => {
      return planeteer.id !== id
    })
      this.setState({
        planeteers: filteredArray
      })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar  search={this.state.search}  changeSearch={this.changeSearch}          />
        <RandomButton addANewPlaneteerToDom={this.addANewPlaneteerToDom}/>
        <PlaneteersContainer planeteers={this.returnsArray()}
                             deletePlaneteer={this.deletePlaneteer}
                          
                          />
      </div>
    );
  }

}

export default App;
