const fs = require('fs');

async function readDatabase(filePath) {
  let data;
  try {
    data = await fs.promises.readFile(filePath, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const students = data.split('\r\n').slice(1)
    .map((student) => student.split(','))
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));
  
  const fields = students.map((student) => student.field);
  const uniqueFields = new Set(fields);
  const studentsByField = {};
  uniqueFields.forEach((field) => {
    studentsByField[field] = [];
  });
  students.forEach((student) => {
    studentsByField[student.field].push(student.firstName);
  });
  
  return studentsByField;
}

module.exports = readDatabase;
