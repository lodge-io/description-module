import React from 'react';
import $ from 'jquery';
import Main from './main.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      host: null,
      hostid: `${window.location.pathname}`,
    };
  }

  componentDidMount() {
    this.load();
  }

  load() {
    const { id } = this.props;
    $.ajax({
      method: 'GET',
      url: `/host/${id}`,
      success: data => (this.setState({ host: data[0] })),
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
