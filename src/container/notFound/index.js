import React, { Component } from 'react';
import ErrorView from '../../components/errorView'

export class NotFound extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ErrorView status={this.props.status} statusText={this.props.statusText} />
    );
  }
}

export default NotFound;
