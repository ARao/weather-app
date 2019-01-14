import React, { Component } from 'react';
import ErrorView from '../../components/errorView'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
export class Error extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount() {
        if (!this.props.interceptor.responseNotOkStatus) {
            this.props.history.push('/');
        }
    }

    componentWillUpdate() {
        if (!this.props.interceptor.responseNotOkStatus) {
            this.props.history.push('/');
        }
    }
    render() {
        return (

            <ErrorView status={this.props.interceptor.status} statusText={this.props.interceptor.statusText} />
        );
    }
}

Error.propTypes = {
    interceptor : PropTypes.object
}

Error.defaultProps = {
    interceptor : {}
}

const mapStateToProps = (state) => {
    return {
      forecastWeather: state.weather.forecast,
      interceptor : state.weather.interceptor 
    }
  };

export default connect(mapStateToProps)( Error );
