const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents (path) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      const results = [];
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const content = data.toString().trim();
        const lines = content.split('\n');
        let length = 0;
        for (let i = 0; i < lines.length; i += 1) {
          const line = lines[i].toString();
          if (line) {
            const values = line.split(',');
            const field = values[3].trim();
            const firstname = values[0].trim();

            if (field !== 'field') {
              if (students[field] !== undefined) {
                students[field].push(firstname);
              } else {
                students[field] = [firstname];
              }
              length += 1;
            }
          }
        }
        results.push(`Number of students: ${length}`);
        for (const [field, names] of Object.entries(students)) {
          results.push(
            `Number of students in ${field}: ${
              names.length
            }. List: ${names.join(', ')}`,
          );
        }
        resolve(results.join('\n'));
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = process.argv[2].toString();
  countStudents(path)
    .then(data => {
      res.send(`This is the list of our students\n${data.toString().trim()}`);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {});

module.exports = app;
