const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// THIS IS FOR MSYQL CONNECTION
const mysql = require("mysql");
const db = mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b4f0d2471a57c3",
  password: "328233e9",
  db: "heroku_24d76449a5017c1",
});

module.exports = connection;

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Valerie Call on me." });
});

app.get("/hey", (req, res) => {
  res.json({ message: "Call on me Valerie." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
