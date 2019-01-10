import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux';

import Home from './components/home';
import History from './components/history';
import Detail from './components/detail'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Route name="home" exact path="/" component={ Home } />
            <Route name="history" exact path="/history" component={ History } />
            <Route name="detail" exact path="/detail/:id" component={ Detail }></Route>
          </div >
        </Router>
      </Provider>
    );
  }
}

export default App;
