var mysql = require('mysql');

function getConnection(callback)
{
	var connection = mysql.createConnection
  ({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'mydb'
	});

	connection.connect(function(err)
  {
	  if (err)
    {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	});

	callback(connection);
}


module.exports =
{
	getResults: function (sql, callback)
  {
		getConnection(function(connection)
    {
			connection.query(sql, function(error, results)
      {
				if(error)
        {
					console.log(error.stack);
					callback([]);
				}

        else
        {
					callback(results);
				}
			});

			connection.end(function(err)
      {
			});
		});
	},

	execute: function (sql, callback)
  {
		getConnection(function(connection)
    {
			connection.query(sql, function(error, results)
      {
				if(error)
        {
					callback(false);
				}
        else
        {
					callback(true);
				}
			});

			connection.end(function(err)
      {
			});
		});
	}
}
