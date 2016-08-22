import API from '../API'

const StockActions = {
  getStocks(term){
    API.getStocks(term);
  },
  getDetails(symbol){
    API.getDetails(symbol);
  }
}

export default StockActions
