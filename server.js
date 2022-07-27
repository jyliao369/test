const express = require("express");
const cors = require("cors");

const connection = require("./models/db");
const app = express();

// CORS
app.use(
  cors({
    origin: "*",
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
});

app.post("/addPost", (req, res) => {
  const title = req.body.title;
  const postBody = req.body.postBody;

  console.log(title + " " + postBody);

  connection.query(
    `INSERT INTO heroku_24d76449a5017c1.posts_table (title, postBody) VALUES ("${title}", "${postBody}")`,
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

app.delete("/deletePost/:postID", (req, res) => {
  const postID = req.params.postID;

  connection.query(
    `DELETE FROM heroku_24d76449a5017c1.posts_table WHERE postID=${postID}`,
    [],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log("Post Deleted");
      }
    }
  );
});

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
