import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrent, fetchForecast } from '../../actions/homeActions'; 
import BasicInfo from '../../components/basicInfo'
import TempInfo from '../../components/tempInfo'
import DayCard from '../../components/dayCard'
import {Link} from 'react-router-dom'
import './style.css'


class Home extends Component {

  componentWillMount() {
    this.props.fetchCurrent();
    this.props.fetchForecast()
  }

  render() {
    
    if (this.props.currentWeather.current && this.props.forecastWeather.forecast){
      return (
        <React.Fragment>
          <div className="row">
            <div className="mr-auto">
              <h1 >Weather</h1>
            </div>
          </div>
          
          <BasicInfo weather={this.props.currentWeather} />
          
          <div className="row">
            <div className="ml-auto">
                 <TempInfo weather={this.props.currentWeather.current} />
            </div>
          </div>
          
          <div className="row">
              { this.props.forecastWeather.forecast.forecastday
                .map((day, index) => 
                (<DayCard day={day} index={index} /> ) ) }

          </div>

          <Link to="history"><button className="btn btn-success"> History </button></Link>
        
        </React.Fragment>
      )
    };
    return (
      <React.Fragment>
        <div className="row">
          <span> Current Weather or Forecast not available</span>
        </div>
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  fetchCurrent: PropTypes.func.isRequired,
  fetchForecast : PropTypes.func.isRequired,
  currentWeather: PropTypes.object.isRequired,
  forecastWeather : PropTypes.object
};

const mapStateToProps = (state) => {
  return { 
  currentWeather : state.weather.current,
  forecastWeather : state.weather.forecast,
}};

export default connect(mapStateToProps, { fetchCurrent, fetchForecast })(Home);
