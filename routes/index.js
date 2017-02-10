var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact ' });
});
//or should i use this structure
//app.get(path, callback(req, res, next))
//res.render(view, locals)
//Thanks
module.exports = router;
