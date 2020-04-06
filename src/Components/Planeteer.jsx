import React from 'react';

class Planeteer extends React.Component {

  state={
    haveIBeenClicked: false
  }

  handleClick=(e) => {
    
    this.setState({
      haveIBeenClicked: !this.state.haveIBeenClicked
      })
  }

  render() {

    let planeteer = this.props.planeteer
    let {name, fromUSA, born, bio, quote, pictureUrl, twitter} = planeteer
    let age = new Date().getFullYear() - born
    // console.log(this.props.planeteer)
    return (
      <li className="cards__item">
        <div className="card" onClick={this.handleClick}>
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{ this.state.haveIBeenClicked ? quote : bio }</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {age}</p>
              <p>{ fromUSA ? "USA-BASED" : "WORKING OVERSEAS" }</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
