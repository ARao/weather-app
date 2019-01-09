import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrent, fetchForecast } from '../actions/homeActions'; 
import { NEXT_DAYS } from '../actions/types'
import BasicInfo from './BasicInfo'



class Home extends Component {

  componentWillMount() {
    this.props.fetchCurrent();
    this.props.fetchForecast()
  }

  componentWillReceiveProps() {
    
  }

  render() {

    const dayCard = this.props.forecastWeather.length === NEXT_DAYS  && this.props.forecastWeather.map( (day, index) =>{
      return(
            <div key={`${day.forecast.forecastday[0].date}--${index}`} >
                <h3>
                  {day.forecast.forecastday[0].date}
                </h3>
                <div>
                  <img src= {day.forecast.forecastday[0].day.condition.icon} alt="weather icon"/>
                </div>
                <div>{day.forecast.forecastday[0].day.condition.text}</div>
                <div>
                  <span>{day.forecast.forecastday[0].day.mintemp_c}</span> ------
                  <span>{day.forecast.forecastday[0].day.maxtemp_c}</span>
                </div>
            </div>
      )})
   
    if (this.props.currentWeather){
          return (
            <div>
              <h1>Weather</h1>
                <BasicInfo weather={this.props.currentWeather} ></BasicInfo>
                <div>
                  <h2>{this.props.currentWeather.current.temp_c}</h2>
                  <h4>{this.props.currentWeather.current.last_updated}</h4>
                </div>
                { dayCard }
              <button>History</button>
            </div>
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
