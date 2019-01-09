import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux';

import Home from './components/Home';
import History from './components/History'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/history" component={History} />
        </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
