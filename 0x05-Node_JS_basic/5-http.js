const http = require("http");
const countStudents = require("./3-read_file_async");

const port = 1245;
const host = "127.0.0.1";

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (res.url === "/") {
    res.write("Hello Holberton School!");
    res.end();
  }
  if (res.url === "/students") {
    res.write("This is the list of our students\n");
    const path = process.argv[2].toString();
    countStudents(path)
      .then((data) => {
        res.end(data.toString().trim());
      })
      .catch((err) => {
        res.statusCode = 404;
        res.end("'Cannot load the database'");
      });
  }
});

app.listen(port, host, () => {});
module.exports = app;
