// Import MySQL connection.
var connection = require("../config/connection.js");

// ORM Object for SQL functions to select all, insert one record, update one record
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, column, value, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";

    connection.query(queryString, [table, column, value], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function(table, column, value, colToSearch, searchVal, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    connection.query(queryString, [table, column, value, colToSearch, searchVal], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  }
};

// Export orm object
module.exports = orm;
