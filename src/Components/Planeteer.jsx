import React from 'react';

class Planeteer extends React.Component {

  state={
    toggleCard: false
  }

  handleToggle = (e) => {
    this.setState({
      toggleCard: !this.state.toggleCard
    })
  }
  
  
  
  render() {
    let {name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.planeteer
    let currentAge = new Date().getFullYear()-born

    // console.log(planeteers)
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.handleToggle}/>
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.toggleCard ? quote : bio}</p>
            <div className="card__detail">
              <p>{this.props.twitter}</p>
              <p>Age: {currentAge}</p>
              <p>{fromUSA ? 'from Usa' : 'Working Overseas'}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
