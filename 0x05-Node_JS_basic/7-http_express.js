const express = require("express");
const countStudents = require("./3-read_file_async");

const app = express();
const port = 1245;

app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

app.get("/students", (req, res) => {
  const path = process.argv[2];
  countStudents(path)
    .then((data) => {
      res.send(
        ["This is the list of our students", data.toString().trim()].join("\n")
      );
    })
    .catch((err) => {
      res.send(["This is the list of our students", err.message].join("\n"));
    });
});

app.listen(port, () => {});

module.exports = app;
