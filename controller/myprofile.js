var express = require('express');
var router = express.Router();
var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
	if(req.session.type == 2)
	{
		user =
		{
			username: req.session.username
		}
		log_in.getINFO(user, function(result)
		{
			res.render('employee/myprofile/index', {list: result});
		});
	}
	else
	{
		res.redirect("/login");
	}
});


module.exports = router;
