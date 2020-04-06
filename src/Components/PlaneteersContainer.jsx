import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  
  let planeteersArray = props.planeteersData.map((onePlaneteer) => {
                        
      return (
            <Planeteer planeteer={onePlaneteer}
                       changeText={props.changeText}
                       
                                 />
      )
  })


  return (
    <ul className="cards">
      {planeteersArray}
    </ul>
  )

};

export default PlaneteersContainer;
