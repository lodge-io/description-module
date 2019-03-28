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

  // componentDidMount() {
  //   this.setState({details: this.props.details})
  // }

  render () {
    var test = this.props.details[1]
    return (
      console.log(this.props),
      <div>
        <h1>{test.title}</h1>
        <div>{test.firstName} {test.lastName}</div>
        <img className="avatar" src={test.pic}></img>
        <div> {test.city}</div>
        <div>Entire House
          <div>{test.guests} guests {test.bedrooms} bedrooms {test.beds} beds {test.baths} baths</div>
        </div>
        <div>{test.superHost ? <SuperHost info={test}/> : null}</div>
        <div>{test.rating > 89 ? <Rating info={test}/> : null}</div>
        <div>{test.selfCheckIn ? <SelfCheckIn info={test}/> : null}</div>
        <div>
          <p>{test.description}</p>
        </div>
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