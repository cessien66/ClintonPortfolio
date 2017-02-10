var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact ' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Contact ' });
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Contact ' });
});
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Contact ' });
});

module.exports = router;
