export default function updateStudentGradeByCity(
  arrayOfStudents,
  city,
  newGrades,
) {
  if (!Array.isArray(arrayOfStudents)) return [];
  return arrayOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id);
      return { ...student, grade: grade ? grade.grade : 'N/A' };
    });
}
