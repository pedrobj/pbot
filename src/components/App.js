import React, { Component } from 'react';
import logo from '../logo.svg';
import './style.css';
import FeedContainer from '../containers/FeedContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <FeedContainer />
      </div>
    );
  }
}

export default App;
