var mysql = require("mysql");
var config = require("../config");

var con = mysql.createConnection(config.dbConfig);

con.connect(function(err) {
  if (err) throw err;
});

exports.GetAllPosition = function(cb) {
  const sql = `SELECT POS_ID,POSITION,DESCRIPTION,SLOT FROM POSITION_TABLE`;
  con.query(sql, function(err, result) {
    if (err) {
      cb({ status: "failed", error: err }, null);
    } else {
      cb(null, result);
    }
  });
};

exports.AddPosition = function(pos, description, slot, cb) {
  const sql = `INSERT INTO POSITION_TABLE (POSITION,DESCRIPTION,SLOT)
                                            VALUES(?,?,?)`;
  con.query(sql, [pos, description, slot], function(err, result) {
    if (err) {
      cb({ status: "failed", error: err }, null);
    } else {
      cb(null, result);
    }
  });
};

exports.DeletePosition = function(pos, cb) {
  const sql = `DELETE FROM POSITION_TABLE WHERE POSITION = ?`;
  con.query(sql, [pos], function(err, result) {
    if (err) {
      cb({ status: "failed", error: err }, null);
    } else {
      cb(null, result);
    }
  });
};

exports.UpdateSlot = function(slot, pos, cb) {
  const sql = `UPDATE POSITION_TABLE SET SLOT = ? WHERE POSITION = ?`;
  con.query(sql, [slot, pos], function(err, result) {
    if (err) {
      cb({ status: "failed", error: err }, null);
    } else {
      cb(null, result);
    }
  });
};
