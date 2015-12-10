var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ingredia' });
});

// Deal with 404 and 500.
router.use(function(req, res, next) {
    res.status(404);
    res.render('code', {
        statusCode: '404',
        errorState: 'Page Not Found.'
    });
});

router.use(function(req, res, next) {
    res.status(500);
    res.render('code', {
        statusCode: '500',
        errorState: 'Unknown Error.'
    });
});

module.exports = router;
