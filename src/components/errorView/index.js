import React, { Component } from 'react';
import './style.css'
import PropsTypes from 'prop-types'

export class ErrorView extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="center">
                    <div className="pr-3">
                        <h1 className="display-1">{this.props.status}</h1>
                    </div>
                    <div>
                        <h4 className="display-4"><sub>{this.props.statusText}</sub></h4>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
ErrorView.PropsTypes = {
    status: PropsTypes.object,
    statusText : PropsTypes.string
}

ErrorView.defaultProps = {
    status : 404,
    statusText : ""
}

export default ErrorView;
