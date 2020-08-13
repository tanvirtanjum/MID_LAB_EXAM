var express = require('express');
var exSession = require('express-session');
var bodyParser = require('body-parser');

var login 		= require('./controller/login');
var admin 		= require('./controller/admin');
var employee 		= require('./controller/employee');
var addemployee = require('./controller/addemployee');
var allemployeelist = require('./controller/allemployeelist');
var myprofile = require('./controller/myprofile');
var updateprofile = require('./controller/updateprofile');

var app 		= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: ' ', saveUninitialized: true, resave: false}));
app.use(function(req, res, next)
{
  res.locals.type = req.session.type;
  next();
});

//middleware
app.use('/login', login);
app.use('/admin', admin);
app.use('/employee', employee);
app.use('/admin/addemployee', addemployee);
app.use('/admin/allemployeelist', allemployeelist);
app.use('/employee/myprofile', myprofile);
app.use('/employee/updateprofile', updateprofile);


app.get('/', function(req, res)
{
	res.send("Go to >> <a href='/login'> LOGIN </a>");
});


app.listen(3333, function()
{
	console.log('Express HTTP Server\nStarted At Port: 3333');
});
