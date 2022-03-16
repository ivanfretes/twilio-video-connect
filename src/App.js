import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TwilioMeeting from './components/TwilioMeeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then((response) => response.json())
      .then((state) => this.setState(state));
  }

  getVideoToken(name) {
    fetch(`/video/token?identity=${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.token);
      });
  }

  render() {
    return (
      <div className='app'>
        <header>
          <h1>Twilio CAS</h1>
        </header>
        <main>
          <TwilioMeeting />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
