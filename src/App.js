import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

const API = "http://localhost:4000/planeteers"

class App extends React.Component {

    state = {
      planeteers: [],
      searchBio: " "
    }

   findBioInfo = (bioInfo) => {
     this.setState({
       searchBio: bioInfo
     })
   }

    componentDidMount(){
      fetch(API)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          planeteers: data
        })
        console.log(data)
      })
    }

    


  render(){
    return (
      <div>
        <Header />
        <SearchBar searchBio={this.state.searchBio} findBioInfo={this.findBioInfo}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers} />
      </div>
    );
  }

}

export default App;
