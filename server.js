const express = require("express");
const cors = require("cors");
const connection = require("./models/db");

const app = express();

// CORS
// app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
});

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
    `INSERT INTO heroku_24d76449a5017c1.posts_table (title, postBody) VALUES (${title}, ${postBody})`,
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
