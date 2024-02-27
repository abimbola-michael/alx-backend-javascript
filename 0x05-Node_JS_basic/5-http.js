const http = require("http");
const { readFile } = require("fs");

const port = 1245;
const host = "127.0.0.1";

function countStudents(path) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      const results = [];
      if (err) {
        reject(Error("Cannot load the database"));
      } else {
        const content = data.toString().trim();
        const lines = content.split("\n");
        let length = 0;
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].toString();
          if (!line) continue;
          const values = line.split(",");
          const field = values[3].trim();
          const firstname = values[0].trim();

          if (field === "field") continue;
          if (students[field] !== undefined) {
            students[field].push(firstname);
          } else {
            students[field] = [firstname];
          }
          length++;
        }
        results.push(`Number of students: ${length}`);
        for (const field in students) {
          const names = students[field];
          results.push(
            `Number of students in ${field}: ${
              names.length
            }. List: ${names.join(", ")}`
          );
        }
        resolve(results.join("\n"));
      }
    });
  });
}
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/") {
    res.end("Hello Holberton School!");
  }
  if (req.url === "/students") {
    res.write("This is the list of our students\n");
    const path = process.argv[2].toString();

    countStudents(path)
      .then((data) => {
        res.end(data.toString().trim());
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end("Cannot load the database");
      });
  }
});

app.listen(port, host, () => {});
module.exports = app;
