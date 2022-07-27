const express = require("express");
const cors = require("cors");
const connection = require("./models/db");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  connection.query(
    `SELECT * FROM heroku_24d76449a5017c1.posts_table;`,
    [],
    (err, result) => {
      res.json(result);
    }
  );
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
