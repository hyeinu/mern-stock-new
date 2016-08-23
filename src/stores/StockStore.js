import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

let _stocks = [];
let _details = {};
let _chart = {};

class StockStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch(action.type){
        case Constants.RECIEVE_STOCKS:
          _stocks = action.stocks;
          this.emit('CHANGE');
          break;
        case Constants.RECIEVE_DETAILS:
          _details = action.details
          this.emit('CHANGE')
          break;
        case Constants.RECIEVE_CHART:
          _chart = action.chart.Elements[0].DataSeries.close.values
          this.emit('DATA')
          break;
      }
    });
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb);
  }
  startListeningChart(cb){
    this.on('DATA', cb);
  }

  stopListeningChart(cb){
    this.removeListener('DATA', cb);
  }

  getAll(){
    return _stocks;
  }
  getDetails(){
    return _details;
  }
  getChart(){
    return _chart;
  }
}

export default new StockStore()
