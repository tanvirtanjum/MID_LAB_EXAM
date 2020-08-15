var express = require('express');
var router = express.Router();

var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
	log_in.getALL(function(result)
	{
		res.render('admin/allemployeelist/index', {list: result});
	});
});

module.exports = router;
