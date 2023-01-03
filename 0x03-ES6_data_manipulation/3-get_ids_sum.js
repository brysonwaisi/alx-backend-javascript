export default function getStudentIds(students) {
  if (students instanceof Array) {
    return students.reduce((prevStudent, currStudent) => prevStudent.id || prevStudent + currStudent.id, 0);
  }
  return 0;
}
