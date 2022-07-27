const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

var corsOptions = {
  origin: "https://thawing-brook-00510.herokuapp.com/",
};

app.use(cors(corsOptions));

// THIS IS THE MYSQL CONNECTION
const db = mysql.createConnection({
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
  db.query(
    `SELECT * FROM heroku_24d76449a5017c1.posts_table`,
    [],
    (err, result) => {
      if (err) {
        res.json({ message: err });
      } else {
        // res.json({ message: "Valerie Call on me." });
        res.json(result);
      }
    }
  );
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
