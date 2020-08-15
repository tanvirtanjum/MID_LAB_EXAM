var express = require('express');
//const fileUpload = require('express-fileupload');
var router = express.Router();
const { upload } = require('../app');

var log_in 	= require.main.require('./models/log_in');

var err =
{
	a: "",
	b: "",
	c: "",
	d: ""
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
		//file: req.files.pc,
		username: req.session.username
	}
	//let file = req.files.sampleFile;
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

/*	if(!req.files || Object.keys(req.files).length === 0)
	{
		err.d="*";
		e = true;
	}
	else
	{
		err.d="";
		file.mv('/pic/'+req.session.username+'.jpg', function(err)
		{
			console.log(err);
		});
	} */

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
