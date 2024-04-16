export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((accumulator, student) => accumulator + student.id, 0);
  }
  return [];
}
