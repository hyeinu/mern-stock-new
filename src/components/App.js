import React, { Component } from 'react';
import { Link } from 'react-router'
import StockAction from '../actions/StockActions'
import StockStore from '../stores/StockStore'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      stock: '',
      details: {}
    }
    this.changeInput = this.changeInput.bind(this)
    // this.searchDetails = this.searchDetails.bind(this)
  }
  componentDidMount(){
    StockStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    StockStore.stopListening(this._onChange);
  }
  changeInput(e){
    this.setState({stock: e.target.value})
  }
  // searchDetails(symbol){
  //   StockAction.getDetails(symbol)
  //   this.setState({stocks: []})
  // }
  render() {
    let term = this.state.stock
    // let stocks
    // let details
    //
    // if(this.state.details){
    //   details = <Details details={this.state.details}/>
    // } else {
    //   details = (<div></div>)
    // }
    //
    // if(this.state.stocks.length){
    //   stocks = this.state.stocks.map((stock, index) =>{
    //     return <SearchRes key={index} stock={stock} searchDetails={this.searchDetails}/>
    //   })
    // } else {
    //   stocks = (<div></div>)
    // }

    return (
      <div className="container">
        <h1 className="text-center"><Link to='/'>Flux Stock Tracker</Link></h1>
        <div className="row">
          <div className="input-group form-inline">
            <input type="text" className="form-control" onChange={this.changeInput} value={term}/>
            <span className="input-group-btn">
              <Link to={`/search/${term}`}>
              <button className="btn btn-info btn-md form-control" id="btn-chat">
                Search
              </button>
              </Link>
            </span>
          </div>
        </div>
        <div className="row">
            {this.props.children}
        </div>
      </div>
    )
  }
}
