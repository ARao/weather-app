import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BasicInfo from '../../components/basicInfo';
import HistoryTable from '../../components/historyTable'
import { fetchHistories } from '../../actions/history'
import { Link } from 'react-router-dom'

export class History extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentWillMount() {
    if(this.props.histories.length === 0){
      this.props.fetchHistories()
    }
  }

  render() {
    const {histories} = this.props 
    
    return (
      <React.Fragment>
        <Link to="/"><button className="btn btn-info mt-4" >Back</button></Link>
        <BasicInfo weather={histories[0]} />
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

History.defaultProps = {
  histories: [],
  fetchHistories : ()=> console.log('default fetch histories'),
}

const mapStateToProps = state => ({
  histories: state.weather.histories,
});

export default connect(mapStateToProps, { fetchHistories })(History);
