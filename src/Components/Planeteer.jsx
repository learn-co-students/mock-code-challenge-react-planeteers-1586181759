import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }

  handleClick = e => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {

    let {name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.planeteer

    let date = new Date().getFullYear()

    return (

      
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.handleClick} />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{ this.state.clicked ? bio : quote}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {date - born}</p>
              <p>{fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
            {/* DELIVERABLE 5? */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
