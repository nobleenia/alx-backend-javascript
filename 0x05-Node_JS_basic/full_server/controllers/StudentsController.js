import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];
    try {
      const data = await readDatabase(databasePath);
      let response = 'This is the list of our students\n';
      const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      fields.forEach(field => {
        response += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });
      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    const databasePath = process.argv[2];
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const data = await readDatabase(databasePath);
      const students = data[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
