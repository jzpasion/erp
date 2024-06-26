var handler = require("../handler/pos_handler");
var express = require("express");
var router = express.Router();
var bodyparser = require("body-parser");
router.use(bodyparser.urlencoded({ extended: false }));

router.get("/GetPositions", (req, res) => {
  handler.GetAllPosition(function(err, data) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(data);
    }
  });
});

router.post("/AddPosition", (req, res) => {
  const pos = req.body.pos;
  const description = req.body.description;
  const slot = req.body.slot;

  if (pos && description && slot) {
    handler.AddPosition(pos, description, slot, function(err, data) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json(data);
      }
    });
  } else {
    res.status(500).json({ message: "invalid parameters!" });
  }
});

router.put("/UpdateSlot/:pos", (req, res) => {
  const pos = req.params.pos;
  const slot = req.body.slot;
  if (pos && slot) {
    handler.UpdateSlot(slot, pos, function(err, data) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json(data);
      }
    });
  } else {
    res.status(500).json({ message: "invalid parameters!" });
  }
});

router.delete("/DeletePosition/:pos", (req, res) => {
  const pos = req.params.pos;
  handler.DeletePosition(pos, function(err, data) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = router;
