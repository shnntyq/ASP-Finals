const dataService = require("../services/dataService");
const express = require("express");
const router = express.Router();

// returns bus arrival info of input bus stop code
router.get('/getbusarrival/', function (req, res) {
    var BusStopCode = req.query.BusStopCode;
    console.log(BusStopCode);
    dataService.getBusArrival(BusStopCode, function (err, arrival) {
        if (err) {
            res.status(401).send("unable to get arrival timing with the provided bus stop code");
        } else {
            res.status(200).send(arrival);
        }
    });
  });
  module.exports = router;