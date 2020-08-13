var express = require('express');
var router = express.Router();
var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
	user =
	{
		username: req.session.username
	}
	log_in.getINFO(user, function(result)
	{
		res.render('employee/myprofile/index', {list: result});
	});
});


module.exports = router;
