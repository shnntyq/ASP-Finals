const dataService = require("../services/dataService");
const express = require("express");
const router = express.Router();

// returns bus arrival info of input bus stop code
router.get("/getTrafficIncidents", function (req, res) {
  dataService.getTrafficIncidents(function (err, TrafficIncidents) {
    if (err) {
      res.status(401).send("unable to get traffic status");
    } else {
      res.status(200).send(TrafficIncidents);
    }
  });
});

module.exports = router;
