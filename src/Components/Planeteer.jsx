import React from 'react';

class Planeteer extends React.Component {
  state = {
    cardClicked: false
  }

  // the function to change state should live inside whatever thing's state was changed
  toggleCardClicked = (event) => {
    this.setState({cardClicked: !this.state.cardClicked})
  }

  render() {
    // let {id, name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.planeteer
    let {id, name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.planeteer
    let age = 2020 - born // change later to have 2020 = thisYear
    
    return (
      <li className="cards__item">
        <div className="card" onClick={this.toggleCardClicked}>
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text"> { this.state.cardClicked? quote : bio } </p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {age}</p>
              <p>{fromUSA? "USA-Based" : "Overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
