import React, { Component } from 'react';


export class HistoryTable extends Component {

    render(){
        const Historyrow = this.props.histories && this.props.histories
        .map((history, index) => (
            <tr key={`${history.forecast.forecastday[0].date}--${index}`} >
                <td>{ history.forecast.forecastday[0].date }</td>
                <td>{history.forecast.forecastday[0].day.mintemp_c}</td>
                <td>{history.forecast.forecastday[0].day.mintemp_c}</td>
            </tr>
        ))
        return (
            <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" >Date</th>
              <th scope="col" >Min</th>
              <th scope="col" >Max</th>
            </tr>
          </thead>
          <tbody>
            { Historyrow }
          </tbody>
        </table>

            
        )
    }
}

export default HistoryTable