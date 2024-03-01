const { readFileSync } = require('fs');

function countStudents(path) {
  const students = {};
  try {
    const content = readFileSync(path)
      .toString()
      .trim();
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
    console.log(`Number of students: ${length}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      );
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
}
module.exports = countStudents;
