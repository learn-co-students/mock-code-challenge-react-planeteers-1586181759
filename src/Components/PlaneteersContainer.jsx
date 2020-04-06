import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  // console.log(props)

  let arrayOfComponents = props.planeteers.map((planeteer) => {
    
  return <Planeteer key={planeteer.id} planeteer={planeteer}
                      deletePlaneteer={props.deletePlaneteer}
  />
  })

  return (
    <ul className="cards">
      {
        arrayOfComponents
      }
      
    </ul>
  )

};

export default PlaneteersContainer;
