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
    this.clearInput = this.clearInput.bind(this)
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
  clearInput(e){
    this.setState({stock: e.target.value})
  }
  render() {
    let term = this.state.stock

    return (
      <div className="container">
        <h1 className="text-center"><Link to='/'>Flux Stock Tracker</Link></h1>
        <div className="row">
          <div className="input-group form-inline">
            <input type="text" className="form-control" onChange={this.changeInput} value={term}/>
            <span className="input-group-btn">
              <Link to={`/search/${term}`}>
              <button onClick={this.clearInput} className="btn btn-info btn-md form-control" id="btn-chat">
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
