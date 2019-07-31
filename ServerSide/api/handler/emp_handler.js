var mysql = require("mysql");
var config = require("../config");

var con = mysql.createConnection(config.dbConfig);

con.connect(function(err) {
  if (err) throw err;
});

exports.GetAllEmp = function(cb) {
  var sql = `SELECT EMP_ID,
                        EMP_NO,
                        LAST_NAME,
                        FIRST_NAME,
                        POSITION,
                        REF_NAME,
                        REF_POS,
                        REF_CONTACT,
                        REF_ADDRESS,
                        REF_EMAIL,
                        DATE
                FROM EMP_TABLE`;
  con.query(sql, function(err, result) {
    if (err) {
      cb({ status: "failed", error: err }, null);
    } else {
      cb(null, result);
    }
  });
};

exports.AddEmp = function(
  emp_no,
  last,
  first,
  pos,
  ref_name,
  ref_pos,
  ref_contact,
  ref_add,
  ref_email,
  cb
) {
  var sql = `INSERT INTO EMP_TABLE (EMP_NO,
                                        LAST_NAME,
                                        FIRST_NAME,
                                        POSITION,
                                        REF_NAME,
                                        REF_POS,
                                        REF_CONTACT,
                                        REF_ADDRESS,
                                        REF_EMAIL,DATE)
                VALUES (?,?,?,?,?,?,?,?,?,CURDATE())`;
  con.query(
    sql,
    [
      emp_no,
      last,
      first,
      pos,
      ref_name,
      ref_pos,
      ref_contact,
      ref_add,
      ref_email
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
