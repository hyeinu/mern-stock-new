import React, { Component } from 'react'
import StockActions from '../actions/StockActions'
import { Link } from 'react-router'

export default class Stock extends Component {
  constructor(){
    super()
  }
  render(){
    let { Name, Symbol, Exchange } = this.props.stock
    return(
          <tr>
            <th>{Name}</th>
            <th>{Symbol}</th>
            <th>{Exchange}</th>
            <th><Link to={`/details/${Symbol}`}>
              <button className="btn btn-primary">
                More Info
              </button>
            </Link></th>
          </tr>
    )
  }
}
