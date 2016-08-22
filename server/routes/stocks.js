const express = require('express');
const router = express.Router();
const stock = require('../models/stock')
const detail = require('../models/detail')

router.route('/:text')
  .get((req, res) =>{
    stock(req.params.text, (err, stocks) => {
      res.send(stocks)
    })
  })

router.route('/details/:symbol')
  .get((req, res) =>{
    detail(req.params.symbol, (err, details) => {
      res.send(details)
    })
  })

module.exports = router;
