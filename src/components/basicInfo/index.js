import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'

class BasicInfo extends Component {
    render() {
        if (this.props.weather && this.props.weather.location) {
            return (
                <div className="row">
                    <div className="ml-auto">
                        <h2 >{this.props.weather.location.name}</h2>
                        <h3 >{this.props.weather.location.country}</h3>
                        <h4 >
                            <span>{this.props.weather.location.lat}</span>  --  <span>{this.props.weather.location.lon}</span>
                        </h4>
                    </div>
                </div>
            );
        }
        return null;
    }
}

BasicInfo.propTypes = {
    weather: PropTypes.object
}

export default BasicInfo