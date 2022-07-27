const express = require("express");
const cors = require("cors");
const connection = require("./models/db");

const app = express();

// CORS
// app.use(cors());
app.use(
  cors({
    origin: ["https://thawing-brook-00510.herokuapp.com/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

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
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
  // res.json({ message: "Valerie Call on me." });
});

app.post("/addPost", (req, res) => {
  const title = req.body.title;
  const postBody = req.body.postBody;

  // console.log(title + " " + postBody);

  connection.query(
    `INSERT INTO heroku_24d76449a5017c1.posts_table (title, postBody) VALUES ("hello", "hello")`,
    [],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
        console.log(result);
      }
    }
  );
});

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
