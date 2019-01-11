import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css'

export class DayCard extends Component {
    render() {
        if (this.props.index && this.props.day) {
            return (
                <Link to={`detail/${this.props.index}`} className="col-md-2 p-4 " key={`${this.props.day.date}--${this.props.index}`} >
                    <small>
                        {this.props.day.date}
                    </small>
                    <div>
                        <img src={this.props.day.day.condition.icon} alt="weather icon" />
                    </div>
                    <small>{this.props.day.day.condition.text}</small>
                    <div>
                        <small className="pr-3 ">{this.props.day.day.mintemp_c}</small>
                        <small>{this.props.day.day.maxtemp_c}</small>
                    </div>
                </Link>
            )
        }
        if (this.props.index === 0) {
            return (
                <React.Fragment>
                    <span></span>
                </React.Fragment>
            )
        }
        return (
            <div className="row" >
                <span className="col-md-4 mx-auto">No Information</span>
            </div>
        )
    }
}

export default DayCard;
