var express = require('express');
var router = express.Router();

var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
	res.render('login/index');
});

router.post('/', function(req, res)
{
  var user =
  {
		username: req.body.username,
		pass: req.body.pass
	}

	log_in.validateLogin(user, function(response)
  {
		if(response.length > 0)
    {
			req.session.type = response[0].status;
			if(req.body.type == 1)
		  {
				res.redirect('/admin');
			}

		  else if(req.body.type == 2)
		  {
				res.redirect('/employee');
			}
		}
    else
    {
      res.send('Somethong Went Wrong....');
    }

	});
});

module.exports = router;
