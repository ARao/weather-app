import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Home from './components/Home';
import History from './components/History'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <History/>
      </Provider>
    );
  }
}

export default App;
