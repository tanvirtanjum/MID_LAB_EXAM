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
		res.render('employee/updateprofile/index', {list: result});
	});
});

router.post('/', function(req, res)
{
	var user=
	{
		fname:  req.body.p,
		pass:  req.body.b,
		username: req.session.username
	}
	log_in.up(user, function(resp)
	{
		res.redirect("/employee/myprofile")
	});
});


module.exports = router;
