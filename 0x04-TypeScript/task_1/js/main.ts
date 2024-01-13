interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Extending the Teacher class
interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const fn = firstName.charAt(0).toUpperCase();
    return `${fn}. ${lastName}`
}

// Interface for the class constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

// Interface for class methods
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// studentClass constructor implementation
const StudentClass: StudentConstructor = class implements StudentClass {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}





























/*
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  const test1 = printTeacher('john', 'doe');
  console.log(director1);
  console.log(teacher3);
  */