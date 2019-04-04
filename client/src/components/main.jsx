import React from 'react';
import SuperHost from './superhost.jsx';
import Rating from './rating.jsx';
import SelfCheckIn from './selfcheckin.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render () {
    const test = this.props.details[0]
    return (
      <div>
        <div className="topleft">
          <div className="title">{test.title}</div>
          <div className="city"> {test.city}</div>
        </div>
        <div className="topright">
          <img className="avatar" src={test.pic}></img>
          <div className="host">{test.firstName} {test.lastName}</div>
        </div>
        <div className="housebox">
          <div className="housetopic">
            <div><b className="highlights"><p><i id="icons" className="fas fa-home"></i> Entire House</p></b>
              <div className="housedescription">
                <div className="housedetails">{test.guests} guests </div>
                <div className="housedetails">{test.bedrooms} bedrooms </div>
                <div className="housedetails">{test.beds} beds </div>
                <div className="housedetails">{test.baths} baths</div>
              </div>
            </div>
          </div>
          <div>{test.superHost ? <SuperHost info={test}/> : null}</div>
          <div>{test.rating > 89 ? <Rating info={test}/> : null}</div>
          <div>{test.selfCheckIn ? <SelfCheckIn info={test}/> : null}</div>
        </div>
        <div>
          <p>{test.description}</p>
        </div>
        <div>License #</div>
        <div>{test.license}</div>
      </div>
    )
  }
}

export default Main;