export default function createIteratorObject(report) {
  function* employeeGenerator() {
    let departments = Object.values(report.allEmployees);
    for (let department of departments) {
      for (let employee of department) {
        yield employee;
      }
    }
  }

  return employeeGenerator();
}
