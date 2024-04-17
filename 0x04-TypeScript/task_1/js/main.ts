// Interface for Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Interface for Directors
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for printTeacher constructor
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implementation of printTeacher
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// Interface for the Student constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

// Interface for Student
interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the class
class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}