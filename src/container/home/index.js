import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrent, fetchForecast } from '../../actions/home';
import { loaderShow, loaderHide } from '../../actions/loader'
import BasicInfo from '../../components/basicInfo'
import TempInfo from '../../components/tempInfo'
import DayCard from '../../components/dayCard'
import { Link } from 'react-router-dom'
import './style.css'


export class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      ready : false
    }
    this.fetchData.bind(this);

  }

  fetchData(){
    if(Object.keys(this.props.currentWeather).length ===  0 || Object.keys(this.props.forecastWeather).length === 0 ){
      this.setState({'ready': false})
      this.props.loaderShow();
      Promise.all([this.props.fetchCurrent(),this.props.fetchForecast()])
      .then(res => {
        this.props.loaderHide();
        this.setState({'ready': true})
      })
      .catch(err => this.props.loaderHide());
    }else{
      this.setState({ready : true});
      this.props.loaderHide();
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  componentWillUpdate() {
    if (this.props.interceptor.responseNotOkStatus) {
      this.props.history.push('/error');
    }
    // this.fetchData()
  }



  render() {
    if (this.state.ready) {
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
            {this.props.forecastWeather.forecast.forecastday
              .map((day, index) =>
                (<DayCard day={day} index={index} key={`Daycard--${index}`} />))}

          </div>

          <Link to="history"><button className="btn btn-success"> History </button></Link>

        </React.Fragment>
      )
    }
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
  fetchForecast: PropTypes.func.isRequired,
  loaderHide : PropTypes.func.isRequired,
  loaderShow : PropTypes.func.isRequired,
  currentWeather: PropTypes.object.isRequired,
  forecastWeather: PropTypes.object.isRequired,
  interceptor : PropTypes.object.isRequired,
};

Home.defaultProps = {
  currentWeather : {},
  forecastWeather : {},
  interceptor : {},
}

const mapStateToProps = (state) => {
  return {
    currentWeather: state.weather.current,
    forecastWeather: state.weather.forecast,
    interceptor : state.weather.interceptor,
  }
};

export default connect(mapStateToProps, { fetchCurrent, fetchForecast, loaderHide, loaderShow })(Home);
