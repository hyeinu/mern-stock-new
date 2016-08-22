const request = require('request')

const getDetails = function(symbol, cb){
  request(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${symbol}`, function (error, response, body) {
    if (error) cb(error)
    if (!error && response.statusCode == 200) {
      let detail = JSON.parse(body)
      console.log('detail:', detail)
      cb(null, detail)
    }
  })
}

module.exports = getDetails;
