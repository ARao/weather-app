import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import Urls from './urls'
import interceptor from './interceptor'
import NotFound from './container/notFound'


class App extends Component {
  constructor(props) {
    super(props)
    interceptor.register()

  }

  render() {
    let routes = Object.keys(Urls).map(key => <Route key={`Route-${key}`} name={key} exact path={Urls[key].path} component={Urls[key].component} />)
    const notFound = <Route key="Route-notFound" name="Error" render={() => (<NotFound status="404" statusText="Not Found" />)} />
    const redirectHome = <Redirect key="Route-redirectHome" exact from="/" to="/home" />

    routes.push(notFound);
    routes.unshift(redirectHome)

    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Switch>
              {routes}
            </Switch>
          </div >
        </Router>
      </Provider>
    );
  }
}

export default App;
