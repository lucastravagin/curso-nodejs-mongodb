var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', {nome: 'Lucas', email: 'lucas_travagin1112@hotmail.com'})
});

module.exports = router;
