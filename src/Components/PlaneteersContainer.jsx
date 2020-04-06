import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  const planeteerCardsArray = props.planeteersData.map
  (planeteer => <Planeteer key={planeteer.id} planeteer={planeteer}/> )
  
  return (
    <ul className="cards">
      {
        planeteerCardsArray
      }
    </ul>
  )

};

export default PlaneteersContainer;
