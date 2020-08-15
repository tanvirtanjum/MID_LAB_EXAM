var express = require('express');
var router = express.Router();

var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
	res.render('admin/index');
});

router.post('/', function(req, res)
{
	if(req.body.hasOwnProperty("add"))
	{
		res.redirect('admin/addemployee');
	}

	else if (req.body.hasOwnProperty("all"))
	{
		res.redirect('admin/allemployeelist');
	}

});

router.get('/update/:id', function(req, res)
{
	user=
	{
		username: req.params.id
	}
	log_in.getINFO(user,function(result)
	{
		res.render('admin/allemployeelist/update/index', {list: result});
	});
});

router.post('/update/:id', function(req, res)
{
	var user=
	{
		fname:  req.body.p,
		pass:  req.body.b,
		username: req.body.n
	}
	log_in.up(user, function(resp)
	{
		res.redirect('/admin/allemployeelist');
	});
});

router.get('/delete/:id', function(req, res)
{
	user=
	{
		username: req.params.id
	}
	log_in.getINFO(user,function(result)
	{
		res.render('admin/allemployeelist/delete/index', {list: result});
	});
});

router.post('/delete/:id', function(req, res)
{
	if(req.body.hasOwnProperty("y"))
	{
		var user=
		{
			fname:  req.body.p,
			pass:  req.body.b,
			username: req.body.n
		}
		log_in.del(req.params.id, function(resp)
		{
			res.redirect('/admin/allemployeelist');
		});
	}

	else if (req.body.hasOwnProperty("n"))
	{
		res.redirect('/admin/allemployeelist');
	}
});




module.exports = router;
