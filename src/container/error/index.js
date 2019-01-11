import React, { Component } from 'react';
import interceptor from '../../interceptor'
import ErrorView from '../../components/errorView'
export class Error extends Component {

    componentDidMount() {
        if (!interceptor.responseNotOkStatus) {
            this.props.history.push('/');
        }
    }

    componentWillUpdate() {
        if (!interceptor.responseNotOkStatus) {
            this.props.history.push('/');
        }
    }
    render() {
        return (
            <ErrorView status={interceptor.status} statusText={interceptor.statusText} />
        );
    }
}

export default Error;
