import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import PropsTypes from 'prop-types'
import { connect } from 'react-redux'
import Loader from '../../container/Loader'
import Urls from '../../urls'
import NotFound from '../notFound'


class MainApp extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    
    let routes = Object.keys(Urls).map(key => <Route key={`Route-${key}`} name={key} exact path={Urls[key].path} component={Urls[key].component} />)
    const notFound = <Route key="Route-notFound" name="Error" render={() => (<NotFound status="404" statusText="Not Found" />)} />
    const redirectHome = <Redirect key="Route-redirectHome" exact from="/" to="/home" />

    routes.push(notFound);
    routes.unshift(redirectHome)

    return (
        <Router>
          <div className="container">
            <Loader/>
            <Switch>
              {routes}
            </Switch>
          </div >
        </Router>
    );
  }
}

MainApp.PropsTypes = {
    loader : PropsTypes.bool.isRequired,
}

MainApp.defaultProps = {
    loader : false
}

const mapStateToProps = state => {
  return {
    loader : state.weather.loader
  }
}

export default connect(mapStateToProps)(MainApp);
