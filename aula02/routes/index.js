var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var db = require('../db')
  db.findCustomers((err, docs) => {
    if (err) res.render('index', { title: 'Erro', customers: [] });
    else {
      res.render('index', { title: 'Express', customers: docs });
    }
  });
});






module.exports = router;
