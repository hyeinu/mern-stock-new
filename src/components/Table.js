"use strict"

import React, { Component } from 'react'
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'Recharts'
import StockAction from '../actions/StockActions'
import StockStore from '../stores/StockStore'


export default class Table extends Component {
  constructor(){
    super()
    this.state = {
      values: []
    }
    this._onChange = this._onChange.bind(this)
  }
  componentDidMount(){
    StockStore.startListeningChart(this._onChange)
  }
  componentWillUnmount(){
    StockStore.stopListeningChart(this._onChange)
  }
  _onChange(){
    this.setState({values: StockStore.getChart()})
  }
  render () {
    let data = this.state.values.map((value, index) =>{
        return {Prices: value, Date: index}
      })

    return (
      <LineChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
     <XAxis dataKey="Date"/>
     <YAxis/>
     <CartesianGrid strokeDasharray="3 3"/>
     <Tooltip/>
     <Legend />
     {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/> */}
     <Line type="monotone" dataKey="Prices" stroke="#82ca9d" />
    </LineChart>
    );
  }
}
