import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux';

import Home from './components/home';
import History from './components/history'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/history" component={History} />
          </div >
        </Router>
      </Provider>
    );
  }
}

export default App;
