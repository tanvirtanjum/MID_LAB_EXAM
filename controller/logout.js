var express = require('express');
var router = express.Router();


router.get('/', function(req, res)
{
  req.session.type = null;
  req.session.username = null;
  res.redirect('/login');
});


module.exports = router;
