import React, { Component } from 'react';
import ErrorView from '../../components/errorView'

export class NotFound extends Component {
  render() {
    return (
      <ErrorView status={this.props.status} statusText={this.props.statusText} />
    );
  }
}

export default NotFound;
