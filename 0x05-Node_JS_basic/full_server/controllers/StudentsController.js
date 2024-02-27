// const readDatabase = require("../utils");
import readDatabase from "../utils";

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(process.argv[2]);
      const results = ["This is the list of our students"];
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b));
      for (const field of fields) {
        const names = students[field];
        results.push(
          `Number of students in ${field}: ${names.length}. List: ${names.join(
            ", "
          )}`
        );
      }
      // response.statusCode = 200;
      // response.end(results.join("\n"));
      response.status(200).send(results.join("\n"));
    } catch (err) {
      // response.statusCode = 500;
      // response.end("Cannot load the database");
      response.status(500).send("Cannot load the database");
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== "CS" && major !== "SWE") {
      // response.statusCode = 500;
      // response.end("Major parameter must be CS or SWE");
      response.status(500).send("Major parameter must be CS or SWE");
    }
    try {
      const students = await readDatabase(process.argv[2]);
      const results = [];
      const names = students[major];
      results.push(`List: ${names.join(", ")}`);
      // response.statusCode = 200;
      // response.end(results.join("\n"));
      response.status(200).send(results.join("\n"));
    } catch (err) {
      // response.statusCode = 500;
      // response.end("Cannot load the database");
      response.status(500).send("Cannot load the database");
    }
  }
}
export default StudentsController;
