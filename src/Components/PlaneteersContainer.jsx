import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  const getEach = props.planeteers.map((member) => {
    return (
    <Planeteer key={member.name} planeteer={member}/>
    )
  })

  return (
    <ul className="cards">
      {getEach}
    </ul>
  )

};

export default PlaneteersContainer;
