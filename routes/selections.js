var express = require("express");
var router = express.Router();
const Selection = require("../models/selections");

router.get("/cart", (req, res) => {
  Selection.find({ booked: false }).then((data) => {
    res.json({ selections: data });
  });
});

router.get("/booking", (req, res) => {
  Selection.find({ booked: true }).then((data) => {
    res.json({ selections: data });
  });
});

router.post("/", (req, res) => {
  const newSelection = new Selection({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.date,
    price: req.body.price,
    booked: false,
  });
  newSelection.save().then((data) => {
    res.json({ result: true, selection: data });
  });
});

router.put("/", (req, res) => {
  Selection.updateMany({ booked: false }, { booked: true }).then(
    res.json({ update: true })
  );
});

router.delete("/", (req, res) => {
  Selection.deleteOne({ booked: false }).then(res.json({ deleted: true }));
});

module.exports = router;
