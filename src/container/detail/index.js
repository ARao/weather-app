import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchForecast } from '../../actions/home'
import {loaderShow, loaderHide} from '../../actions/loader'
import { Link } from 'react-router-dom'
import PropsTypes from 'prop-types'

export class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentWillMount() {
    if (Object.keys(this.props.forecastWeather) === 0) {
      this.props.loaderShow()
      this.props.fetchForecast()
      .then( res => this.props.loaderHide)
      .catch( err => console.log('failed to fetch detail'))
    }
    if (parseInt(this.props.match.params.id, 10) === 0 ||
      this.props.match.params.id >= this.props.forecastWeather.forecast.forecastday.length) {
      this.props.history.push('/');
    }

  }

  render() {
    if (!this.props.forecastWeather.forecast) {
      return null
    }

    const astro = Object.keys(this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].astro).map(key => {
      return (
        <div key={`astro-${key}`} className="pt-2">
          <span className="mr-3">{key}</span>
          <span>{this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].astro[key]} </span>
        </div>)
    })

    return (
      <div className="mt-4 ">
        <Link to="/"> <button className="btn btn-info">Back</button></Link>
        <div className="row">
          <div className="mt-2 col-md-4 ml-auto">
            <h5>{this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].date}</h5>
            <p>{this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.condition.text} </p>
            <img src={this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.condition.icon} alt="icon" />
          </div>
        </div>
        <div className="row" >
          <div className="col-md-6 mx-auto">
            {astro}
            <div className="pt-2">
              <span className="mr-3">Max Temp. </span>
              <span>{this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.maxtemp_c} <sup>o</sup>C </span>
            </div>
            <div className="pt-2">
              <span className="mr-3">Min Temp. </span>
              <span>{this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.mintemp_c} <sup>o</sup>C </span>
            </div>
            <div className="pt-2">
              <span className="mr-3">Avg Temp. </span>
              <span>{this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.avgtemp_c} <sup>o</sup>C </span>
            </div>
            <div className="pt-2">
              <span className="mr-3">Max Wind </span>
              <span>{this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.maxwind_kph} kmph </span>
            </div>
            <div className="pt-2">
              <span className="mr-3">Avg Hummdity </span>
              <span>{this.props.forecastWeather.forecast.forecastday[this.props.match.params.id].day.avghumidity}  </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Detail.propsTypes = {
  fetchForecast : PropsTypes.func.isRequired,
  loaderHide : PropsTypes.func.isRequired,
  loaderShow : PropsTypes.func.isRequired,
  forecastWeather : PropsTypes.object.isRequired
}
Detail.defaultProps = {
  forecastWeather : {},
}
const mapStateToProps = state => ({
  forecastWeather: state.weather.forecast
});


export default connect(mapStateToProps, { fetchForecast, loaderHide, loaderShow })(Detail);
