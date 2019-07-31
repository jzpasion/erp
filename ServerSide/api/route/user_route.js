var handler = require("../handler/user_handler");
var express = require("express");
var router = express.Router();
var bodyparser = require("body-parser");
router.use(bodyparser.urlencoded({ extended: false }));

router.get("/getUsers", (req, res) => {
  handler.GetAllUser(function(err, data) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(data);
    }
  });
});

router.get("/Login", (req, res) => {
  const uname = req.body.uname;
  const password = req.body.password;
  if (uname && password) {
    handler.LoginUser(uname, password, function(err, data) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json(data);
        console.log(data);
      }
    });
  } else {
    res.status(500).json({ error: "Invalid parameters!" });
  }
});

router.post("/addUser", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const position = req.body.position;
  if (username && password && position) {
    handler.AddUser(username, password, position, function(err, data) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json(data);
      }
    });
  } else {
    res.status(500).json({ message: "Invalid Parameters!" });
  }
});

module.exports = router;
