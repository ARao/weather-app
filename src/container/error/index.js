import React, { Component } from 'react';

export class Error extends Component {

    render() {
      return (
        <React.Fragment>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">{this.props.errorCode}</h1>
                </div>
            </div>
        </React.Fragment>
      );
    }
  }

export default Error;