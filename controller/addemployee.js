var express = require('express');
var router = express.Router();

var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
	res.render('admin/addemployee/index');
});

router.post('/', function(req, res)
{
	var user=
	{
		username: req.body.uname,
		fname: req.body.fname,
		status: req.body.des,
		pass: req.body.pass
	}

	log_in.addLogin(user, function(resp)
	{
		res.redirect('/admin/addemployee');
	})
});


module.exports = router;
