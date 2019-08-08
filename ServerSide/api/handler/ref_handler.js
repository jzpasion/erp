var mysql = require("mysql");
var config = require("../config");

var con = mysql.createConnection(config.dbConfig);

con.connect(function(err) {
  if (err) throw err;
});

exports.getAllRef = function(cb) {
  const sql = `SELECT REF_LOG.REF_ID,
                    REF_LOG.EMP_NAME,
                    REF_LOG.REF_LAST_NAME,
                    REF_LOG.REF_FIRST_NAME,
                    REF_LOG.REF_ADDRESS,
                    REF_LOG.REF_CONTACT,
                    REF_LOG.REF_EMAIL,
                    REF_LOG.POSITION,
                    STATUS,
                    REF_LOG.DATE 
                    FROM REF_LOG `;
  con.query(sql, function(err, result) {
    if (err) {
      cb({ status: "failed", error: err }, null);
    } else {
      cb(null, result);
    }
  });
};

exports.AddRef = function(
  emp_name,
  ref_lastname,
  ref_firstname,
  ref_address,
  ref_contact,
  ref_email,
  ref_pos,
  cb
) {
  const sql = `INSERT INTO REF_LOG (EMP_NAME,
                                        REF_LAST_NAME,
                                        REF_FIRST_NAME,
                                        REF_ADDRESS,
                                        REF_CONTACT,
                                        REF_EMAIL,
                                        POSITION,
                                        DATE)
                VALUES (?,?,?,?,?,?,?,CURDATE())`;
  con.query(
    sql,
    [
      emp_name,
      ref_lastname,
      ref_firstname,
      ref_address,
      ref_contact,
      ref_email,
      ref_pos
    ],
    function(err, result) {
      if (err) {
        cb({ status: "failed", error: err }, null);
      } else {
        cb(null, result);
      }
    }
  );
};

exports.EditStatus = function(status, id, cb) {
  const sql = `UPDATE REF_LOG SET STATUS =? WHERE REF_ID = ?`;
  con.query(sql, [status, id], function(err, result) {
    if (err) {
      cb({ status: "failed", error: err }, null);
    } else {
      cb(null, result);
    }
  });
};

exports.DeleteRef = function(id, cb) {
  const sql = `DELETE FROM REF_LOG WHERE REF_ID = ?`;
  con.query(sql, [id], function(err, result) {
    if (err) {
      cb({ status: "failed", error: err }, null);
    } else {
      cb(null, result);
    }
  });
};
