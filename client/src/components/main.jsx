import React from 'react';
import SuperHost from './superhost.jsx';
import Rating from './rating.jsx';
import SelfCheckIn from './selfcheckin.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { details } = this.props;
    return (
      <div>
        <div className="topleft">
          <div className="title">{details[0].title}</div>
          <div className="city">{details[0].city}</div>
        </div>
        <div className="topright">
          <img className="avatar" alt="hostavatar" src={details[0].pic}></img>
          <div className="host">
            {details[0].firstName} {details[0].lastName}
          </div>
        </div>
        <div className="housebox">
          <div className="housetopic">
            <div><b className="highlights"><p><i id="icons" className="fas fa-home"></i> Entire House</p></b>
              <div className="housedescription">
                <div className="housedetails">{details[0].guests} guests </div>
                <div className="housedetails">{details[0].bedrooms} bedrooms </div>
                <div className="housedetails">{details[0].beds} beds </div>
                <div className="housedetails">{details[0].baths} baths</div>
              </div>
            </div>
          </div>
          <div>{details[0].superHost ? <SuperHost info={details[0]} /> : null}</div>
          <div>{details[0].rating > 89 ? <Rating info={details[0]} /> : null}</div>
          <div>{details[0].selfCheckIn ? <SelfCheckIn info={details[0]} /> : null}</div>
        </div>
        <div>
          <p>{details[0].description}</p>
        </div>
        <div>License #</div>
        <div>{details[0].license}</div>
      </div>
    );
  }
}

export default Main;
