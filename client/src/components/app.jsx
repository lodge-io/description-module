import React from 'react';
import $ from 'jquery';
import Main from './main.jsx';

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
    const { host } = this.state;
    return (
      <div>
        {host ? <Main details={host} /> : null}
      </div>
    );
  }
}

export default App;