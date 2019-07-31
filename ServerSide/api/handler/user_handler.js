var mysql = require("mysql");
var config = require("../config");

var con = mysql.createConnection(config.dbConfig);

con.connect(function(err) {
  if (err) throw err;
});

exports.GetAllUser = function(cb) {
  var sql = `SELECT USER_ID,USERNAME,PASSWORD,POSITION FROM USER_TABLE`;
  con.query(sql, function(err, result) {
    if (err) {
      cb({ status: "failed", error: err }, null);
    } else {
      cb(null, result);
    }
  });
};

exports.LoginUser = function(uname, password, cb) {
  var sql = `SELECT * FROM USER_TABLE WHERE USERNAME = ? AND PASSWORD = ?`;
  con.query(sql, [uname, password], function(err, result) {
    if (err) {
      cb({ status: "failed", error: err }, null);
    } else {
      cb(null, result);
    }
  });
};

exports.AddUser = function(username, password, postion, cb) {
  var sql = `INSERT INTO USER_TABLE (USERNAME,PASSWORD,POSITION)
                VALUES (?,PASSWORD(?),?)`;
  con.query(sql, [username, password, postion], function(err, result) {
    if (err) {
      cb({ status: "failed", error: err }, null);
    } else {
      cb(null, result);
    }
  });
};
