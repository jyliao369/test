const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// THIS IS THE MYSQL CONNECTION
const connection = mysql.createConnection({
  HOST: "us-cdbr-east-06.cleardb.net",
  USER: "b4f0d2471a57c3",
  PASSWORD: "328233e9",
  DB: "heroku_24d76449a5017c1",
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Valerie Call on me." });
});

app.get("/hey", (req, res) => {
  res.json({ message: "Call on me Valerie." });
});

// require("./app/routes/tutorial.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
