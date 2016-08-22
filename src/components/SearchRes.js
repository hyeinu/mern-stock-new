import React, { Component } from 'react'

export default class SearchRes extends Component {
  constructor(){
    super()
    this.searchDets = this.searchDets.bind(this)
  }
  searchDets(symbol){
    this.props.searchDetails(symbol)
  }
  render(){
    let {Name, Symbol, Exchange} = this.props.stock
    return(
      <button className="btn btn-primary" onClick={this.searchDets.bind(null, Symbol)}>{Name} || {Symbol}</button>
    )
  }
}
