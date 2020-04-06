import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  state ={
    planeteersData: [],
    searchString: ""
  }

  componentDidMount() { // fetch data
    fetch('http://localhost:4000/planeteers')
    .then(resp => resp.json())
    .then(jsonObj => this.setState({planeteersData: jsonObj}))
  }

  // -1: PseudoCode

  // 0: Chart App hierarchy

  // Deliverable 1: render data
  // fetch data
  // QQ: I've decided to save data in state. This seems right. But Nicky discouraged this in Hogwarts?
  // pass down planeteers data as props to PlaneteersContainer
  // in PlaneteersContainer map over props.planeteersData to create PlaneteerCardsArray
  // using template from Planeteer.jsx
  // get num of planeteers to render as default cards
  // alter Planeteer.jsx to render individual data
  // add ternary to conditionally render planeteer.fromUSA
  // add state ={cardClicked: false} to Planeteer.jsx
  // have a toggleCardClicked function() { this.setState({cardClicked: !this.state.cardClicked})}
  // add ternary to conditionally render 
  // this.state.cardClicked? {planeteer.quote} : {planeteer.bio}

  // Deliverable 2: Dynamic Search
  // getting tripped up right now trying to imagine how the data
  // returned by the fetch is getting stored so that we can pass it down as props
  // I guess we could define the fetch function outside of componentDidMount
  // then invoke it in that LSM, then pass down the invocation to PlaneteersContainer?
  // something about that seems wrong. 
  // I think I'm just going to start coding it and see if I can figure it out there cuz
  // conceptually right now I'm missing something. Good thing I'm pseudocoding b/c it
  // makes me aware of there my conceptual gaps exist; the muscle memory might still be there though.
  // need to connect different parts of my brain together just like different parts of this app.

  // so we decided to save the planeteersData array in this.state.planeteersData 
  // which means if we want dynamic search (i.e., dynamic filter) we want to create a filter function
  // that takes in the array held in this.state.planeteersData and filters it based on
  // the values held in SearchBar. Then we just need pass down that filteredArray as props in place of this.state.planeteersData
  // which means we need a child (searchBar) to control the data its sibling (PlaneteersContainer) receives
  // since we do not have lateral data flow, we need inverse data flow.
  // which means we need to pass up the value held in SearchBar to App.js
  // which means we need a callback in App.js that we pass down to SearchBar.jsx
  // and that callback needs to setState

  setSearchString = (event) => {
    this.setState({searchString: event.target.value})
  }

  filteredPlaneteersArray = (searchString) => {
    let filteredArray = this.state.planeteersData.filter(planeteerObj => 
      planeteerObj.name.toLowerCase().includes(searchString.toLowerCase())
      ||
      planeteerObj.bio.toLowerCase().includes(searchString.toLowerCase())
      )
    // to add:     || planeteerObj.bio.includes(searchString)
    return filteredArray
  }

  render(){
    let data = this.filteredPlaneteersArray(this.state.searchString)
    return (
      <div>
        <Header />
        <SearchBar setSearchString={this.setSearchString}/>
        <RandomButton/>
        <PlaneteersContainer planeteersData={data} />
      </div>
    );
  }
}

export default App;
