import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import Urls from './urls'


class App extends Component {
  render() {
    const routes = Object.keys(Urls)
    .map(key => 
          <Route key={`Route-${key}`} 
          name={key} 
          exact path={Urls[key].path} 
          component={Urls[key].component } /> )
    
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            {routes}
          </div >
        </Router>
      </Provider>
    );
  }
}

export default App;
