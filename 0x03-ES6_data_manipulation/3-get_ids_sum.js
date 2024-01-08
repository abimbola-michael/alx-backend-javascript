export default function getStudentIdsSum(arrayOfStudents) {
  if (!Array.isArray(arrayOfStudents) === false) return 0;
  return arrayOfStudents.reduce((total, student) => total + student.id, 0);
}
