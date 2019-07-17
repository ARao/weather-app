import React, { Component } from 'react';
import PropsTypes from 'prop-types'

export class TempInfo extends Component {
    render() {
        if (this.props.weather) {
            return (
                <React.Fragment>
                    <span className="p-2" >{this.props.weather.temp_c} <sup>o</sup>C</span>
                    <span className="p-2" >{this.props.weather.last_updated}</span>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <span> Info not available</span>
            </React.Fragment>
        )
    }
}

TempInfo.PropsTypes = {
    weather: PropsTypes.object
}

TempInfo.defaultProps = {
    weather : {}
}

export default TempInfo;
