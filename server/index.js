const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello from our server!" });
});

app.listen(3001, () => {
  console.log("server listening on port 3001");
});
