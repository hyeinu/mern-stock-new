import React, { Component } from 'react'

export default class Detail extends Component {
  constructor(){
    super()
  }
  render(){
    let {Name, Change, High, Low, Open, ChangeYTD} = this.props.details

    return(
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Change</td>
            <td>High</td>
            <td>Low</td>
            <td>Open</td>
            <td>ChangeYTD</td>
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
    )
  }
}
