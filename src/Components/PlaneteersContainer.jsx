import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  console.log("test")
  console.log(props)
  return (
    <ul className="cards">
      {
        props.planeteersArray.map( planeteer => 
        <Planeteer key={planeteer.name} {...planeteer}/>)
      }
    </ul>
  )

};

export default PlaneteersContainer;


