import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BasicInfo from '../basicInfo'
import { fetchHistories } from '../../actions/historyActions'
import { Link } from 'react-router-dom'

class History extends Component {

  componentWillMount(){
    this.props.fetchHistories()
  }

  render() {
    const histories = this.props.histories && this.props.histories.map((history, index) =>{
          return (
            <tr  key={`${history.forecast.forecastday[0].date}--${index}`} >
              <td>{ history.forecast.forecastday[0].date }</td>
              <td>{history.forecast.forecastday[0].day.mintemp_c}</td>
              <td>{history.forecast.forecastday[0].day.mintemp_c}</td>
            </tr>
          )
    })
    return (
      <React.Fragment>
        <Link  to="/"><button className="btn btn-info mt-4" >Back</button></Link>
        <BasicInfo weather={this.props.histories && this.props.histories[0]}/>
        <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" >Date</th>
              <th scope="col" >Min</th>
              <th scope="col" >Max</th>
            </tr>
          </thead>
          <tbody>
            {histories}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

History.propTypes = {
  fetchHistories: PropTypes.func.isRequired,
  histories : PropTypes.array,
};

const mapStateToProps = state =>({
      histories : state.weather.histories,
});

export default connect(mapStateToProps, { fetchHistories })(History);
