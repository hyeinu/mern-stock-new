import React, { Component } from 'react'
import StockStore from '../stores/StockStore'
import StockAction from '../actions/StockActions'
import Stock from './Stock'


export default class SearchRes extends Component {
  constructor(){
    super()
    this.state = {
      stocks: []
    }
    // StockAction.getStocks(this.props.params.term)
    this._onChange = this._onChange.bind(this)
  }
  componentWillReceiveProps(nextProps){
    StockAction.getStocks(nextProps.params.term)
  }
  componentDidMount(){
    StockStore.startListening(this._onChange);
    StockAction.getStocks(this.props.params.term)
  }
  componentWillUnmount(){
    StockStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({stocks: StockStore.getAll()})
  }
  render(){
    let stockRows
    if(this.state.stocks.length){
      stockRows = this.state.stocks.map((s, index) =>{
        return <Stock key={index} stock={s}/>
      })
    } else{
      stockRows = (<tr></tr>)
    }
    return(
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Exchange</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {stockRows}
        </tbody>
      </table>
    )
  }
}
