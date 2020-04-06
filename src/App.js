import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchedTerm: "test"
  }

  componentDidMount(){
    fetch('http://localhost:4000/planeteers')
      .then( (res) => res.json())
      .then( planeteers => {
        this.setState({
          planeteers: planeteers
        })
      })
  }

  changeSearchedTerm = (term) =>{
    this.setState({
      searchedTerm: term
    })
  }

  filteredResult = () => {
    let filteredArr = this.state.planeteers.filter( planeteer => {
      return planeteer.name.includes(this.state.searchedTerm)
    })

    return filteredArr
  }

  // ----------------------------------------------------------
  render(){
    return (
      <div>
        <Header />
        <SearchBar searchedTerm={this.state.searchedTerm} changeSearchTerm={this.changeSearchTerm}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.filteredResult()} />
      </div>
    );
  }

}

export default App;
