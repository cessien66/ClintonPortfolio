var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Renders the contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact ' });
});
// Renders the about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Contact ' });
});
// Renders the project page
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Contact ' });
});
// Renders the service page
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Contact ' });
});

module.exports = router;
