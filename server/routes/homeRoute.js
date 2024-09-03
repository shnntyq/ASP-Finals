const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");

router.post("/location", homeController.home);

module.exports = router;
