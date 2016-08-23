import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

const ServerAction = {
  recieveStocks(stocks){
    AppDispatcher.dispatch({
      type: Constants.RECIEVE_STOCKS,
      stocks
    })
  },
  recieveDetails(details){
    AppDispatcher.dispatch({
      type: Constants.RECIEVE_DETAILS,
      details
    })
  },
  recieveChart(chart){
    AppDispatcher.dispatch({
      type: Constants.RECIEVE_CHART,
      chart
    })
  }
}

export default ServerAction
