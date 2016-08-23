import axios from 'axios'
import ServerAction from './actions/ServerActions'
import jsonp from 'jsonp'

const API = {
  getStocks(text){
    let url = `http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${text}`
    jsonp(url, function (err, data) {
      ServerAction.recieveStocks(data)
    })
  },
  getDetails(symbol){
    let url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}`
    jsonp(url, function (err, data) {
      ServerAction.recieveDetails(data)
    })
  },
  getCharts(symbol){
    let url = "http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/jsonp?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22" + symbol + "%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D"
    jsonp(url, function (err, data) {
      ServerAction.recieveChart(data)
    })
  }
}

export default API
