import React from 'react';



let bioQuoteOnOff = true

class Planeteer extends React.Component {


  

  getAge = (birthYear) => {
         let today = new Date()
         let age = today.getFullYear() - birthYear
         return age   
  } 

  render() {
     
     const image = this.props.planeteer.pictureUrl
     const name = this.props.planeteer.name
     const local = this.props.planeteer.fromUSA
     const born = this.props.planeteer.born
     const bio = this.props.planeteer.bio
     const quote = this.props.planeteer.quote
     const twitter = this.props.planeteer.twitter
   

    return (
      <li className="cards__item">
        <div className="card">
          <img src={image} alt={name} className="card__image" onClick={() => bioQuoteOnOff = !bioQuoteOnOff}/>
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{bioQuoteOnOff
                  ?
                  bio
                  :
                  quote
                                      }</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {this.getAge(born)}</p>
              <p>{local
                  ?
                  "USA-based"
                  :
                  "Working Overseas"
                 }</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
