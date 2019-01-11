import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BasicInfo from '../../components/basicInfo';
import HistoryTable from '../../components/historyTable'
import { fetchHistories } from '../../actions/historyActions'
import { Link } from 'react-router-dom'

export class History extends Component {

  componentWillMount() {
    this.props.fetchHistories()
  }

  render() {
    return (
      <React.Fragment>
        <Link to="/"><button className="btn btn-info mt-4" >Back</button></Link>
        <BasicInfo weather={this.props.histories && this.props.histories[0]} />
        <hr />
        <HistoryTable histories={this.props.histories} />
      </React.Fragment>
    );
  }
}

History.propTypes = {
  fetchHistories: PropTypes.func.isRequired,
  histories: PropTypes.array,
};

const mapStateToProps = state => ({
  histories: state.weather.histories,
});

export default connect(mapStateToProps, { fetchHistories })(History);
