var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(value, cb) {
    orm.insertOne("burgers", "burger_name", value, function(res) {
      cb(res);
    });
  },
  updateOne: function(value, searchVal, cb) {
    orm.updateOne("burgers", "devoured", value, "id", searchVal, function(res) {
      cb(res);
    });
}
}

// Export the database functions for the controller
module.exports = burger;
