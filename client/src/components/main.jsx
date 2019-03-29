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
    var test = this.props.details[0]
    return (
      console.log(this.props),
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
          {/* <div className="iconbox">
            <img className="houseicon" src="images/bus.png"></img>
          </div> */}
          <div className="housetopic">
            <div><b className="highlights"><p><i id="icons" class="fas fa-home"></i> Entire House</p></b>
              <div className="house">
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

// var Main = (props) => (
//   console.log(props),
//   <div>
//     {props[0].title}
//   </div>
// )
export default Main;