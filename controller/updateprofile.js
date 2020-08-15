var express = require('express');
var router = express.Router();

var log_in 	= require.main.require('./models/log_in');

var err =
{
	a: "",
	b: "",
	c: "",
}


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
			res.render('employee/updateprofile/index', {list: result, err: err});
		});
	}
	else
	{
		res.redirect("/login");
	}
});

router.post('/', function(req, res)
{
	var user=
	{
		fname:  req.body.p,
		pass:  req.body.b,
		con:  req.body.c,
		username: req.session.username
	}
	var e = false;
	if(user.fname.length < 1)
	{
		//console.log("null");
		err.a="*";
		e = true;
	}
	else
	{
		err.a="";
	}
	if(user.pass.length < 8)
	{
		err.b="*";
		e = true;
	}
	else
	{
		err.b="";
	}
	if(user.con.length < 11 || user.con.length > 11)
	{
		err.c="*";
		e = true;
	}
	else
	{
		err.c="";
	}

	if(!e)
	{

		log_in.up(user, function(resp)
		{
			res.redirect("/employee/myprofile")
		});
	}
	else
	{
		res.redirect("/employee/updateprofile")
	}
});


module.exports = router;
