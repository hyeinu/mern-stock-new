import React, { Component } from 'react'
import StockStore from '../stores/StockStore'
import StockAction from '../actions/StockActions'

export default class SearchRes extends Component {
  constructor(){
    super()
    this.state = {
      stocks: []
    }
    // StockAction.getStocks(this.props.params.term)
    this.searchDets = this.searchDets.bind(this)
    this._onChange = this._onChange.bind(this)
  }
  componentDidUpdate(){
    console.log('this.props.params.term:', this.props.params.term)
    StockAction.getStocks(this.props.params.term)
  }
  componentDidMount(){
    StockStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    StockStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({stocks: StockStore.getAll()})
  }
  searchDets(symbol){
    this.props.searchDetails(symbol)
  }
  render(){
    console.log('this.state.stocks:', this.state.stocks)
    return(
      <h1>Hello this is stock res</h1>
      // <button className="btn btn-primary" onClick={this.searchDets.bind(null, Symbol)}>{Name} || {Symbol}</button>
    )
  }
}
