const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
require("dotenv").config();

const router = require("./routes/routes.js");

// =====
// connect to database
// =====
mongoose.connect(process.env.mongoDBConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Established Mongoose Connection");
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
