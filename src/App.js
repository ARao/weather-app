import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import interceptor from './interceptor'
import MainApp from './container/app'


class App extends Component {
  constructor(props) {
    super(props)
    interceptor.register()
  }

  render() {
    return (
      <Provider store={store}>
        <MainApp/>
      </Provider>
    );
  }
}

export default App;
