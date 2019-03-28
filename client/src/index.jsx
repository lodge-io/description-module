import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Main from './components/main.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mount: false,
      host: {},
    }

  }

  componentDidMount() {
    this.load()
  }

  load() {
    $.ajax({
      method: 'GET',
      url: '/host',
      success: (data) => (this.setState({host: data, mount: true})),
      error: () => (console.log('Didnt Mount'))
    })
  }

  render () {
    return (
      <div>
        <div>The beginning of time~</div>
        {this.state.mount ? <Main details={this.state.host} /> : null}
        {/* <Main details={this.state.host}/> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))