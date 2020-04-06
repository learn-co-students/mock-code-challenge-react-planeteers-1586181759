import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  const getEach = props.planeteers.map((member) => {
    return (
    <Planeteer key={member.id} planeteer={member} deletePlaneteer={props.deletePlaneteer}/>
    )
  })

  return (
    <ul className="cards">
      {getEach}
    </ul>
  )

};

export default PlaneteersContainer;
