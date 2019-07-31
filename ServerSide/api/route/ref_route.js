var handler = require("../handler/ref_handler");
var express = require("express");
var router = express.Router();
var bodyparser = require("body-parser");
router.use(bodyparser.urlencoded({ extended: false }));

router.get("/getRefers", (req, res) => {
  handler.getAllRef(function(err, data) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(data);
    }
  });
});

router.post("/addRefer", (req, res) => {
  const emp_name = req.body.emp_name;
  const ref_lastname = req.body.ref_lastname;
  const ref_firstname = req.body.ref_firstname;
  const ref_address = req.body.ref_address;
  const ref_contact = req.body.ref_contact;
  const ref_email = req.body.ref_email;
  const ref_pos = req.body.ref_pos;
  if (
    emp_name &&
    ref_lastname &&
    ref_firstname &&
    ref_address &&
    ref_contact &&
    ref_email &&
    ref_pos
  ) {
    handler.AddRef(
      emp_name,
      ref_lastname,
      ref_firstname,
      ref_address,
      ref_contact,
      ref_email,
      ref_pos,
      function(err, data) {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.status(200).json(data);
        }
      }
    );
  } else {
    res.status(500).json({ message: "invalid parameters!" });
  }
});

module.exports = router;
