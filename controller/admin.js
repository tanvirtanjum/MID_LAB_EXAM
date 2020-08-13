var express = require('express');
var router = express.Router();

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


module.exports = router;
