var express = require('express');
//var popup = require('popups');
var router = express.Router();


router.get('/', function(req, res)
{
	res.render('admin/allemployeelist/index');
	/*if(req.body.hasOwnProperty("upd"))
	{
		res.redirect('allemployeelist/update');
	}

	else if (req.body.hasOwnProperty("dlt"))
	{
  	res.redirect('allemployeelist/delete');
	}
	else
	{
		res.render('admin/allemployeelist/index');
	}*/
});

/*router.get('/delete', function(req, res)
{
	res.render('admin/allemployeelist/delete/index');
});*/

router.post('/', function(req, res)
{
	if(req.body.hasOwnProperty("upd"))
	{
		res.redirect('allemployeelist/update');
	}

	if (req.body.hasOwnProperty("dlt"))
	{
  	res.redirect('allemployeelist/delete');
	}
});

module.exports = router;
