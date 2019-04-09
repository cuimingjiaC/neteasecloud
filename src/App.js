import React, { Component } from 'react';
import './App.css';
import Home from 'pages/home/Home'

import { Provider } from 'react-redux'
import store from './store/'

import {
  BrowserRouter as Router
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Home></Home>
        </Router>
      </Provider>
      
    );
  }
}

export default App;
