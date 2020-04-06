import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  let arrayOfComponents = props.planeteers.map((singlePlaneteer)=>{
    return(
      <Planeteer 
      key={singlePlaneteer}
      planeteer={singlePlaneteer}
      />
    )
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
