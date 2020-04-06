import React, { Fragment } from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
console.log(props)
  return (
    <Fragment>
    <ul className="cards">
      {
        props.planeteers.map((planeteer) => {
          return <Planeteer key={planeteer.id} planeteer={planeteer}/>
        })
      }
    </ul>
    </Fragment>
  )

};

export default PlaneteersContainer;
