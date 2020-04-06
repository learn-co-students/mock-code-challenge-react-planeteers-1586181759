import React from 'react';

class Planeteer extends React.Component {

  state = {
    isClicked: false
  }

  switchInfo = () => {
    let newState = !this.state.isClicked
    this.setState({
      isClicked: newState
    })
  }

  getYear = () => {
    let currentYear = new Date().getFullYear()
    return currentYear
  }

  render() {

    let {name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.planeteer

    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.switchInfo}/>
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.isClicked ? quote : bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {this.getYear()-born}</p>
              <p>{fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
