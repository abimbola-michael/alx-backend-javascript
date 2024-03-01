// const { readFile } = require("fs");
import { readFile } from 'fs';

function readDatabase(path) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const content = data.toString();
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          const line = lines[i];
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
            }
          }
        }

        resolve(students);
      }
    });
  });
}

// module.exports = readDatabase;
export default readDatabase;
