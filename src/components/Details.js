import React, { Component } from 'react'
import StockAction from '../actions/StockActions'
import StockStore from '../stores/StockStore'
import Table from './Table'

export default class Detail extends Component {
  constructor(){
    super()
    this.state = {
      details: {}
    }
    this._onChange = this._onChange.bind(this)
    this.refreshPage = this.refreshPage.bind(this)
  }
  componentDidMount(){
    StockStore.startListening(this._onChange);
    StockAction.getDetails(this.props.params.symbol)
    StockAction.getCharts(this.props.params.symbol)
  }
  componentWillUnmount(){
    StockStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({details: StockStore.getDetails()})
  }
  refreshPage(){
    StockAction.getDetails(this.props.params.symbol)
    StockAction.getCharts(this.props.params.symbol)
  }
  render(){
    let { Name, Change, High, Low, Open, ChangeYTD } = this.state.details
    return(
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Change</th>
              <th>High</th>
              <th>Low</th>
              <th>Open</th>
              <th>ChangeYTD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Name}</td>
              <td>{Change}</td>
              <td>{High}</td>
              <td>{Low}</td>
              <td>{Open}</td>
              <td>{ChangeYTD}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary form-control" onClick={this.refreshPage}>Refresh</button>
        <Table />
      </div>

    )
  }
}
