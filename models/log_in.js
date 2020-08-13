var db = require('./db');

module.exports =
{
	validateLogin: function(user, callback)
  {
		var sql = "SELECT * FROM `log_in` WHERE	username='"+user.username+"' AND pass='"+user.pass+"';";
		db.getResults(sql, function(result)
    {
      if(result.length > 0)
      {
				callback(result);
			}
      else
      {
				callback([]);
			}
		});
	},

	getALL: function(callback)
  {
		var sql = "SELECT * FROM `log_in`;";
		db.getResults(sql, function(result)
    {
      if(result.length > 0)
      {
				callback(result);
			}
      else
      {
				callback([]);
			}
		});
	},

	addLogin: function(user, callback)
  {
		var sql = "INSERT INTO `log_in`(`username`, `status`, `fname`, `pass`) VALUES ('"+user.username+"','"+user.status+"','"+user.fname+"','"+user.pass+"');";
		db.execute(sql, function(result)
    {
      if(result)
      {
				callback(true);
			}
      else
      {
				callback(false);
			}
		});
	}
}
