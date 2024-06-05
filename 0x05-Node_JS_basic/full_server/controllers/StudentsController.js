const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    readDatabase('./database.csv').then((data) => {
      Object.keys(data).sort().forEach((field) => {
        res.write(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`);
      });
      res.end();
    }).catch((err) => {
      res.status(500).send(err.message);
    });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase('./database.csv').then((data) => {
      res.status(200).send(`List: ${data[major].join(', ')}`);
    }).catch((err) => {
      res.status(500).send(err.message);
    });
  }
}

export default StudentsController;
