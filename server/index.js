const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(3001, () => {
  console.log("server listening on port 3001");
});
