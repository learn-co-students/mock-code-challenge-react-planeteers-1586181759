import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'


class App extends React.Component {

  

  state={
    info:[],
    searchTerm:""
  }

  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
      .then(r => r.json())
      .then((arrayOfPlaneteers)=>{
          this.setState({
            info:arrayOfPlaneteers
          })
      })
  }


  
  changeSearchTerm = (value) =>{
    this.setState({
      searchTerm: value
    })
  }

  addPlan = (value) => {
    let newinfo = [...this.state.info,value]
      this.setState({
        info: newinfo
      })
  }
  
  filterInfo = () => {
    
    let filteredArr = this.state.info.filter((onePlaneteer)=>{
      return onePlaneteer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      ||
      onePlaneteer.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredArr
  }
  

  render(){
    return (
      <div>
        <Header />
        <SearchBar changeSearchTerm={this.changeSearchTerm} searchTerm={this.state.searchTerm}/>
        <RandomButton addPlan={this.addPlan}/>
        <PlaneteersContainer planeteers={this.filterInfo()}/>
      </div>
    );
  }

}

export default App;
