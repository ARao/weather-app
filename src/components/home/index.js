import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrent, fetchForecast } from '../../actions/homeActions'; 
import BasicInfo from '../basicInfo'
import {Link} from 'react-router-dom'
import './style.css'


class Home extends Component {

  componentWillMount() {
    this.props.fetchCurrent();
    this.props.fetchForecast()
  }

  componentWillReceiveProps() {
    
  }

  render() {

    const dayCard = this.props.forecastWeather && this.props.forecastWeather.length > 0 && this.props.forecastWeather.map(
       (day, index) =>{
          return(
            <div className="col-md-2 p-4"  key={`${day.forecast.forecastday[0].date}--${index}`} >
                <small>
                  {day.forecast.forecastday[0].date}
                </small>
                <div>
                  <img src= {day.forecast.forecastday[0].day.condition.icon} alt="weather icon"/>
                </div>
                <small>{day.forecast.forecastday[0].day.condition.text}</small>
                <div>
                  <small>{day.forecast.forecastday[0].day.mintemp_c}</small>
                  <small>{day.forecast.forecastday[0].day.maxtemp_c}</small>
                </div>
            </div>
      )})
   
    if (this.props.currentWeather && this.props.currentWeather.current){
          return (
            <React.Fragment>
              <div className="row">
                <div className="mr-auto">
                  <h1 >Weather</h1>
                </div>
              </div>
              
              <BasicInfo weather={this.props.currentWeather} ></BasicInfo>
              
              <div className="row">
                <div className="ml-auto">
                      <span className="p-2" >{this.props.currentWeather.current.temp_c} <sup>o</sup>C</span>
                      <span className="p-2" >{this.props.currentWeather.current.last_updated}</span>
                </div>
              </div>
              
              <div className="row">
                  { dayCard }
              </div>
              <Link to="/history"><button className="btn btn-success"> History </button></Link>
            </React.Fragment>
          );
    }
    return null
  }
}

Home.propTypes = {
  fetchCurrent: PropTypes.func.isRequired,
  fetchForecast : PropTypes.func.isRequired,
  currentWeather: PropTypes.object.isRequired,
  forecastWeather: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({ 
  currentWeather : state.weather.current,
  forecastWeather : state.weather.forecast,
});

export default connect(mapStateToProps, { fetchCurrent, fetchForecast })(Home);
