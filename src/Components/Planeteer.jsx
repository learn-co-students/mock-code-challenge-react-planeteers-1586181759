import React from 'react';

class Planeteer extends React.Component {

  state={
    overSeas: true
    
  }
  
  planeteer = this.props.name
  
  render() {
    // console.log(planeteers)
    return (
      <li className="cards__item">
        <div className="card">
          <img src={"RENDER IMAGE"} alt={this.props.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.name}</div>
            <p className="card__text">{"CONDITIONALLY RENDER BIO OR QUOTE"}</p>
            <div className="card__detail">
              <p>{this.props.twitter}</p>
              <p>Age: {"RENDER THE AGE OF THE PERSON"}</p>
              <p>{this.state.overSeas}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
