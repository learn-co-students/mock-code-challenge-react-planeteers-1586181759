import React from 'react';

class Planeteer extends React.Component {

  constructor(props){
    super(props)
    const {id, name, fromUSA, born, bio, quote, pictureUrl, twitter} = {...this.props}
    this.state = { clicked: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.setState({
      clicked: true
    })
  }
  
  render() {
    var d = new Date()
    var n = d.getFullYear()

    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.pictureUrl} alt={this.props.name} className="card__image" onClick={this.handleClick} />
          <div className="card__content">
            <div className="card__title">{this.props.name}</div>
            <p className="card__text">{this.state.clicked? this.props.quote : this.props.bio}</p>
            <div className="card__detail">
              <p>{this.props.twitter}</p>
              <p>Age: {n - this.props.born}</p>
              <p>{this.props.fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;

