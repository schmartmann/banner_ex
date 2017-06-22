import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Bubbles from './Bubbles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bannerContainer">
          <Banner/>
          <Bubbles/>
          <div className="credits">
            <p>Created by Stefan Hartmann, 2017</p>
            <p><a href="http://schmartmann.com">Portfolio</a></p>
            <p><a href="http://github.com/schmartmann">GitHub</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
