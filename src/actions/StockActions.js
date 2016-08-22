import API from '../API'

const StockActions = {
  getStocks(text){
    API.getStocks(text);
  },
  getDetails(symbol){
    API.getDetails(symbol);
  }
}

export default StockActions
