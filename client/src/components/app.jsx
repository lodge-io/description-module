import React from 'react';
import $ from 'jquery';
import Main from './main.jsx';
// import SelfCheckIn from './selfcheckin.jsx';
// import Rating from './rating.jsx';
// import SuperHost from './superhost.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      host: null,
    };
  }

  componentDidMount() {
    this.load();
  }

  load() {
    $.ajax({
      method: 'GET',
      url: '/host',
      success: data => (this.setState({ host: data })),
      error: () => (console.log('Didnt Mount')),
    });
  }

  render() {
    return (
      <div>
        <div>The beginning of time~</div>
        {this.state.host ? <Main details={this.state.host} /> : null}
        {/* <div>
          <Main details={this.state.host} />
        </div> */}
      </div>
    );
  }
}

export default App;
