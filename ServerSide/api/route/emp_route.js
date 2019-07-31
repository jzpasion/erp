var express = require("express");
var router = express.Router();
var handler = require("../handler/emp_handler");
var bodyparser = require("body-parser");
router.use(bodyparser.urlencoded({ extended: false }));

router.get("/GetAllEmp", (req, res) => {
  handler.GetAllEmp(function(err, data) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(data);
    }
  });
});

router.post("/AddEmp", (req, res) => {
  const emp_no = req.body.emp_no;
  const last = req.body.last;
  const first = req.body.first;
  const pos = req.body.pos;
  const ref_name = req.body.ref_name;
  const ref_pos = req.body.ref_pos;
  const ref_contact = req.body.ref_contact;
  const ref_add = req.body.ref_add;
  const ref_email = req.body.ref_email;

  if (
    emp_no &&
    last &&
    first &&
    pos &&
    ref_name &&
    ref_pos &&
    ref_contact &&
    ref_add &&
    ref_email
  ) {
    handler.AddEmp(
      emp_no,
      last,
      first,
      pos,
      ref_name,
      ref_pos,
      ref_contact,
      ref_add,
      ref_email,
      function(err, data) {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.status(200).json(data);
        }
      }
    );
  } else {
    res.status(500).json({ Message: "Invalid Parameters!" });
  }
});

module.exports = router;
