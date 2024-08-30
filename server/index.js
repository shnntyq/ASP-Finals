const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const homeRoutes = require("./routes/homeRoute");
app.use("/", homeRoutes);
const busRoutes = require("./routes/busRoute");
app.use("/bus", busRoutes);
const trafficRoutes = require("./routes/trafficRoute");
app.use("/traffic", trafficRoutes);

app.listen(3001, () => {
  console.log("server listening on port 3001");
});
