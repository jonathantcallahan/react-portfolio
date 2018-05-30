import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Homepage from './pages/homepage/Homepage'

class App extends Component {
  render() {
    return (
      <Router>
        <div id='main-body'>
          <Route exact path='/' component={Homepage}/>
        </div>
      </Router>
    );
  }
}

export default App;
