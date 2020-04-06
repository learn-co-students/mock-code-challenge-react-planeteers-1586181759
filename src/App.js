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
      .then(data => {
            data.forEach(item => {item["bioOrQuote"] = true})
            this.setState({ themplanet : data })
          })
  }

  changeText = (event, orNot) => {
            const planId = event.target.parentElement.dataset.id
            const workArray = [...this.state.themplanet]
            if (orNot) {
                workArray[planId - 1].bioOrQuote = true
            } else {
                workArray[planId - 1].bioOrQuote = false
            }
            this.setState({ themplanet : workArray })
  }

  randomNewOne = (randomPlaneteer) => {
          fetch('http://localhost:4000/planeteers', {
                method: "POST",
                headers: {
                        "content-type": "application/json"
                },
                body: JSON.stringify(randomPlaneteer)
                })
          .then(response => response.json())
          .then((newOne) => {
                 const workArray = [...this.state.themplanet]
               //  randomPlaneteer.id = workArray.length + 1
                 randomPlaneteer["bioOrQuote"] = true
                 workArray.push(newOne)
                 console.log(workArray)
                 this.setState({ themplanet : workArray })
            })
  }


  render(){
    console.log(this.state.themplanet)


    return (
      <div>
        <Header        />
        <SearchBar />
        <RandomButton randomNewOne={this.randomNewOne}/>
        <PlaneteersContainer planeteersData={this.state.themplanet}
                             changeText={this.changeText} 
                            />
      </div>
    );
  }

}

export default App;
