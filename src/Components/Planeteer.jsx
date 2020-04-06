import React from 'react';

class Planeteer extends React.Component {

  state={
    display: true
  }
  
  handleClick = (e) =>{
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    let date = new Date()
    let year = date.getFullYear()
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.handleClick} src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            {this.state.display 
            ? 
            <p className="card__text">{this.props.planeteer.bio}</p> 
            :<p className="card__text">{this.props.planeteer.quote}</p> }
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>Age: {year - this.props.planeteer.born}</p>
              {this.props.planeteer.fromUSA ?
              <p>USA-Based</p>
              :
              <p>Working Overseas</p>
              }
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
