import axios from 'axios'
import ServerAction from './actions/ServerActions'
import jsonp from 'jsonp'

const API = {
  getStocks(text){
    let url = `http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${text}`
    jsonp(url, function (err, data) {
      console.log('data:', data)
      ServerAction.recieveStocks(data)
    })
  },
  getDetails(symbol){
    axios.get(`/api/stocks/details/${symbol}`)
      .then(res => {
        return res.data
      })
      .then(ServerAction.recieveDetails)
      .catch(console.error)
  }
}

export default API
