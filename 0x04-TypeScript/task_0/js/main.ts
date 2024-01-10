interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Michael",
  lastName: "Jordan",
  age: 35,
  location: "London",
};

const student2: Student = {
  firstName: "Lebron",
  lastName: "James",
  age: 40,
  location: "LA",
};

const studentsList: Array<Student> = [student1, student2];
const table = document.createElement("table");
const row = table.insertRow();
row.innerHTML = `<td>First Name</td><td>Location</td>`;
studentsList.forEach((student) => {
  const row = table.insertRow();
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
});

document.body.appendChild(table);
