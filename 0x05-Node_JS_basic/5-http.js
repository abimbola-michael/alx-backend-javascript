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
    const path = process.argv[2];
    countStudents(path)
      .then((data) => {
        res.write(data.toString().trim());
        res.end();
      })
      .catch((err) => {
        res.statusCode = 404;
        res.write(err.message);
        res.end();
      });
  }
});

app.listen(port, host, () => {});
module.exports = app;
