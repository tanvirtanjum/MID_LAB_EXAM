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
	}
}
