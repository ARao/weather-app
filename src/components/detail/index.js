import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchForecast } from '../../actions/homeActions'
import { Link } from 'react-router-dom'


class Detail extends Component {
  
  componentWillMount(){
    if( !this.props.forecastWeather.forecast ){
      this.props.fetchForecast()
    }
  }

  render() {
    if (!this.props.forecastWeather.forecast){
      return null
    }
    
    if (this.props.match.params.id === 0 || 
        this.props.match.params.id >= this.props.forecastWeather.forecast.forecastday.length){
          this.props.history.push('/');
    }

    const astro = Object.keys(this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].astro).map(key => {
                  return (
                  <div key={`astro-${key}`} className="pt-2">
                    <span className="mr-3">{ key }</span>
                    <span>{ this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].astro[key] } </span>
                  </div>)
                })
    
    return (
      <div className="mt-4 ">
        <Link to="/"> <button className="btn btn-info">Back</button></Link>
        <div className="row">
          <div className="mt-2 col-md-4 ml-auto">
            <h5>{this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].date}</h5>
            <p>{this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.condition.text } </p>
            <img src={ this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.condition.icon } alt="icon"/>
          </div>
        </div>
        <div className="row" >
          <div className="col-md-6 mx-auto">
            { astro}
            <div className="pt-2">
              <span className="mr-3">Max Temp. </span>
              <span>{ this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.maxtemp_c } <sup>o</sup>C </span>
            </div>
            <div className="pt-2">
              <span className="mr-3">Min Temp. </span>
              <span>{ this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.mintemp_c } <sup>o</sup>C </span>
            </div>
            <div className="pt-2">
              <span className="mr-3">Avg Temp. </span>
              <span>{ this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.avgtemp_c } <sup>o</sup>C </span>
            </div>
            <div className="pt-2">
              <span className="mr-3">Max Wind </span>
              <span>{ this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.maxwind_kph } kmph </span>
            </div>
            <div className="pt-2">
              <span className="mr-3">Avg Hummdity </span>
              <span>{ this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.avghumidity }  </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

History.propTypes = {
};

const mapStateToProps = state =>({
  forecastWeather : state.weather.forecast
});

export default connect(mapStateToProps, { fetchForecast })(Detail);
