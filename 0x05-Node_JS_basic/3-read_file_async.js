const { readFile } = require('fs');

function countStudents(path) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const content = data.toString();
        const lines = content.split('\n');
        const length = lines.length - 1;
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (!line) continue;
          const values = line.split(',');
          const field = values[3].trim();
          const firstname = values[0].trim();

          if (field === 'field') continue;
          if (students[field] !== undefined) {
            students[field].push(firstname);
          } else {
            students[field] = [firstname];
          }
        }
        console.log(`Number of students: ${length}`);
        for (const field in students) {
          const names = students[field];
          console.log(
            `Number of students in ${field}: ${
              names.length
            }. List: ${names.join(', ')}`,
          );
        }
        resolve(data);
      }
    });
  });
}
module.exports = countStudents;
